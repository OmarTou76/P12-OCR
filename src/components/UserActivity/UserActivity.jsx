import React, { useEffect, useState } from 'react'
import { useFetch } from '../../utils/useFetch'
import './userActivity.css'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

export const UserActivity = ({ userId = 12 }) => {
    const [activity, setActivity] = useState({})
    const [userActivity, activityLoading, errorActivity] = useFetch(userId, "activity")

    useEffect(() => {
        if (!activityLoading && !errorActivity) setActivity(userActivity)
    }, [userActivity, activityLoading, errorActivity])

    if (errorActivity) return <p>Error with data</p>



    return (
        <div className='userActivity'>
            {!activity?.data ? <p>...Loading</p> :
                <ResponsiveContainer width="100%"
                    aspect={3}>
                    <BarChart barSize={12} data={activity.data.sessions}>
                        <Legend verticalAlign='top' height={50}
                            content={({ payload }) => {
                                return (
                                    <div className='activity__legend'>
                                        <p>Activité quotidienne</p>
                                        <ul>
                                            {payload.map((entry, key) => (
                                                <li key={key}>
                                                    <span className='activity__legend__color' style={{ backgroundColor: entry.color }} />
                                                    <p>{entry.dataKey === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            }} />
                        <XAxis tickLine={false} tickFormatter={(num) => num + 1} tickSize={15} />
                        <YAxis orientation='right' tickLine={false} tickSize={15} axisLine={false} />
                        <Tooltip
                            contentStyle={{ background: 'red' }}
                            labelStyle={{ display: 'none' }}
                            itemStyle={{ color: 'white' }} formatter={(value, name) => {
                                if (name === "calories") return [`${value}kCal`]
                                else if (name === "kilogram") return [`${value}kg`]
                            }} />
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <Bar dataKey="kilogram" fill="black" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

{/* <Legend verticalAlign='top' iconType='circle' align="right" height={50} formatter={(value) => {
                            if (value === "kilogram") return "Poids (kg)"
                            else if (value === "calories") return "Calories brûlées (kCal)"
                        }} /> */}
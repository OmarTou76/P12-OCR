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
                    <BarChart
                        barSize={15}
                        data={activity.data.sessions}
                    >
                        <Legend verticalAlign='top' iconType='circle' align="right" height={50} formatter={(value) => {
                            if (value === "kilogram") return "Poids (kg)"
                            else if (value === "calories") return "Calories brûlées (kCal)"
                        }} />
                        <XAxis tickLine={false} tickFormatter={(num) => num + 1} tickSize={15} />
                        <YAxis orientation='right' tickLine={false} tickSize={15} axisLine={false} />
                        <Tooltip />
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <Bar dataKey="kilogram" fill="black" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

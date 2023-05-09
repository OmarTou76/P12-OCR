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
import { Activity } from '../../models/Activity';
import PropTypes from 'prop-types';

export const UserActivity = ({ userId }) => {
    const [activity, setActivity] = useState({})
    const [userActivity, activityLoading, errorActivity] = useFetch(userId, "activity")

    useEffect(() => {
        if (!activityLoading && !errorActivity) {
            const activities = new Activity(userActivity)
            setActivity(activities.data)
        }
    }, [userActivity, activityLoading, errorActivity])

    if (errorActivity) return <p>Error with data</p>

    return (
        <div className='userActivity'>
            {!activity ? <p>...Loading</p> :
                <ResponsiveContainer width="100%"
                    aspect={3.5}>
                    <BarChart barSize={9} data={activity}>
                        <Legend verticalAlign='top' height={60}
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
                        <XAxis tickLine={false} dataKey={"day"} tickSize={20} />
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

UserActivity.propTypes = {
    userId: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["mock"])
    ]).isRequired,
}
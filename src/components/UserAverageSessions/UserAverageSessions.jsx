import React, { useEffect, useState } from 'react'
import {
    XAxis,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend
} from "recharts";
import { useFetch } from '../../utils/useFetch';
import './userAverageSessions.css'

export const UserAverageSessions = ({ userId }) => {

    const [sessions, setSessions] = useState({})
    const [userSessions, sessionsLoading, errorSessions] = useFetch(userId, "average-sessions")

    useEffect(() => {
        if (!sessionsLoading && !errorSessions) setSessions(userSessions)
    }, [userSessions, sessionsLoading, errorSessions])

    if (errorSessions) return <p>Error with data</p>

    const days = ["L", "M", "M", "J", "V", "S", "D"]

    return (
        <div className='userAverageSessions'>
            {!sessions?.data ? <p>...Loading</p> :
                <ResponsiveContainer width="100%"
                    aspect={1} >
                    <LineChart data={sessions.data.sessions} >
                        <defs>
                            <linearGradient id="MyGradient">
                                <stop offset="30%" stop-color="white" stopOpacity={0.3} />
                                <stop offset="95%" stop-color="white" />
                            </linearGradient>
                        </defs>
                        <Legend verticalAlign='top' content={() => {
                            return (
                                <p className='userAverageSessions__legend'>Durée mouyenne des sessions</p>
                            )
                        }} />
                        <XAxis tickLine={false} tickFormatter={(num) => days[num]} axisLine={false} tickSize={20} tick={{ fill: "white", opacity: .7 }} />
                        <Line dataKey="sessionLength" strokeWidth={2} type="monotone" stroke="url(#MyGradient)" dot={false} />
                    </LineChart>
                </ResponsiveContainer>

            }
        </div>
    )
}


import React, { useEffect, useState } from 'react'
import {
    XAxis,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend,
    Tooltip
} from "recharts";
import { useFetch } from '../../utils/useFetch';
import './userAverageSessions.css'

export const UserAverageSessions = ({ userId }) => {

    const [sessions, setSessions] = useState({})
    const [userSessions, sessionsLoading, errorSessions] = useFetch(userId, "average-sessions")
    const [isTooltipActive, setTooltip] = useState(false)
    const [backgroundPercent, setBackgroundPercent] = useState(null)

    useEffect(() => {
        if (!sessionsLoading && !errorSessions) setSessions(userSessions)
    }, [userSessions, sessionsLoading, errorSessions])

    if (errorSessions) return <p>Error with data</p>

    const days = ["L", "M", "M", "J", "V", "S", "D"]

    const handleBackgroundPercer = (e) => {
        setTooltip(e.isTooltipActive)
        if (!e.isTooltipActive) return
        const labelSum = days.length - 1
        const percent = ((100 * e.activeLabel) / labelSum)
        setBackgroundPercent(Math.abs(percent - 100))
    }

    return (
        <div className='userAverageSessions'
            style={{
                background: isTooltipActive && `linear-gradient(270deg, rgba(208,0,0,1) ${backgroundPercent}%, rgba(255,0,0,1) ${backgroundPercent}%)`
            }}>
            {!sessions?.data ? <p>...Loading</p> :
                <ResponsiveContainer width="100%" aspect={1}>
                    <LineChart data={sessions.data.sessions}
                        onMouseLeave={() => setTooltip(false)}
                        onMouseMove={handleBackgroundPercer}
                    >
                        <defs>
                            <linearGradient id="MyGradient">
                                <stop offset="30%" stopColor="white" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="white" />
                            </linearGradient>
                        </defs>
                        <Legend verticalAlign='top' content={() => (
                            <p className='userAverageSessions__legend'>Durée mouyenne des sessions</p>
                        )} />

                        <Tooltip
                            labelStyle={{ display: "none" }}
                            itemStyle={{ color: 'black', fontSize: "8px" }}
                            formatter={(value) => [`${value} min`]}
                            cursor={{ stroke: 'none' }}
                        />
                        <XAxis tickLine={false} tickFormatter={(num) => days[num]} axisLine={false} tickSize={20} tick={{ fill: "white", opacity: .5 }} />
                        <Line dataKey="sessionLength" strokeWidth={2} type="monotone" stroke="url(#MyGradient)" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

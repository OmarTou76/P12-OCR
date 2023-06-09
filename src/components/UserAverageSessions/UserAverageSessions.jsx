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
import { AverageSessions } from '../../models/AverageSessions';
import PropTypes from 'prop-types'
import { useBackground } from './useBackground';

export const UserAverageSessions = ({ userId }) => {

    const [sessions, setSessions] = useState({})
    const [userSessions, errorSessions, sessionsLoading] = useFetch(userId, "average-sessions")
    const { isTooltipActive, setTooltip, backgroundPercent, handleBackgroundPercent, calculateCssPercent } = useBackground(sessions.length)

    useEffect(() => {
        if (!sessionsLoading && !errorSessions) {
            const average = new AverageSessions(userSessions)
            setSessions(average.data)
        }
    }, [userSessions, sessionsLoading, errorSessions])

    if (errorSessions) return <div className="userAverageSessions"><p>Error with average sessions datas</p></div>

    return (
        <div className='userAverageSessions'
            style={{
                background: isTooltipActive && `linear-gradient(270deg, rgba(208,0,0,1) ${calculateCssPercent(backgroundPercent)}, rgba(255,0,0,1) ${calculateCssPercent(backgroundPercent)})`
            }} >
            {sessionsLoading ? <p>...Loading</p> :
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sessions}
                        onMouseLeave={() => setTooltip(false)}
                        onMouseMove={handleBackgroundPercent}
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
                        <XAxis tickLine={false} dataKey={'day'} axisLine={false} tickSize={15} tick={{ fill: "white", opacity: .5 }} fontSize={12} />
                        <Line dataKey="sessionLength" strokeWidth={2} type="monotone" stroke="url(#MyGradient)" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            }
        </div>
    )
}
UserAverageSessions.propTypes = {
    userId: PropTypes.oneOfType([
        PropTypes.number,
    ]).isRequired,
}
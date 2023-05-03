import React, { useEffect, useState } from 'react'
import { useFetch } from '../../utils/useFetch'
import { Performance } from '../../models/Performance'
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar
} from 'recharts'
import './userPerformance.css'

export const UserPerformance = ({ userId }) => {

    const [performance, setPerformance] = useState({})
    const [userPerformance, performanceLoading, errorPerformance] = useFetch(userId, "performance")

    useEffect(() => {
        if (!performanceLoading && !errorPerformance) {
            setPerformance(new Performance(userPerformance))
        }
    }, [userPerformance, performanceLoading, errorPerformance])

    if (errorPerformance) return <p>Error with data</p>

    return (
        <div className='userPerformance' >
            {!performance ? <p>...Loading</p> : (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="65%" data={performance}>
                        <PolarGrid radialLines={false} stroke='white' />
                        <PolarAngleAxis dataKey="kind" fontSize={9} tickSize={10} tick={{ fill: "white" }} />
                        <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}

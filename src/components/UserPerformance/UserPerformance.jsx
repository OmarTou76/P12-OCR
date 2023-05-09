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
import PropTypes from 'prop-types'

export const UserPerformance = ({ userId }) => {

    const [performance, setPerformance] = useState({})
    const [userPerformance, performanceLoading, errorPerformance] = useFetch(userId, "performance")

    useEffect(() => {
        if (!performanceLoading && !errorPerformance) {
            const userData = new Performance(userPerformance)
            setPerformance(userData.data)
        }
    }, [userPerformance, performanceLoading, errorPerformance])

    if (errorPerformance) return <p>Error with data</p>
    console.log(performance)
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

UserPerformance.propTypes = {
    userId: PropTypes.number.isRequired,
}
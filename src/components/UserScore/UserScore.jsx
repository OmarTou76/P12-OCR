import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { useFetch } from '../../utils/useFetch'
import { User } from '../../models/User'
import './userScore.css'

export const UserScore = ({ userId }) => {


    const [score, setScore] = useState({})
    const [userData, userLoading, userError] = useFetch(userId)
    useEffect(() => {
        if (userData && !userError && !userLoading) {
            const user = new User(userData.data)
            setScore(user.score)
        }
    }, [userData, userError, userLoading])


    if (userError) return <p>Error</p>


    return (
        <div className='userScore'>
            {!score ? <p>...Loading</p> : (
                <ResponsiveContainer width="100%" height="100%" >
                    <PieChart>
                        <Legend verticalAlign='top' height={15} content={() => (
                            <p className='userScore__title'>Score</p>
                        )} />
                        <Pie
                            data={score}
                            cx={"50%"}
                            cy={"50%"}
                            innerRadius={"65%"}
                            outerRadius={"75%"}
                            paddingAngle={5}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="score"
                        >
                            <Cell dataKey={score[0]} fill="red" cornerRadius={30} />
                            <Cell dataKey={score[1]} fill='transparent' />
                        </Pie>
                        <Pie
                            data={[score[0]]}
                            cx={"50%"}
                            cy={"50%"}
                            outerRadius={"65%"}
                            dataKey="score"
                            labelLine={false}
                            label={({ score }) => {
                                return (
                                    <text
                                        x={"50%"}
                                        y={"50%"}
                                        textAnchor="middle"
                                    >
                                        <tspan style={{ fontSize: 32, fontWeight: 700, fill: "#282D30" }} x={"50%"} dy={0}>{score}%</tspan>
                                        <tspan style={{ fill: "#74798C" }} x={"50%"} dy={30}>de votre</tspan>
                                        <tspan x={"50%"} style={{ fill: "#74798C" }} dy={20}>objectif</tspan>
                                    </text>
                                )
                            }}
                        >
                            <Cell dataKey='score' fill='white' opacity={.5} />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}
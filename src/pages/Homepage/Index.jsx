import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import './homepage.css'
import { AsideBar } from '../../components/AsideBar/AsideBar'
import { useFetch } from '../../utils/useFetch'
import { User } from '../../models/User'
import { UserActivity } from '../../components/UserActivity/UserActivity'
import { UserAverageSessions } from '../../components/UserAverageSessions/UserAverageSessions'
import { UserPerformance } from '../../components/UserPerformance/UserPerformance'
import { UserScore } from '../../components/UserScore/UserScore'

export const Homepage = ({ userId = 12 }) => {
    const [user, setUser] = useState({})
    const [userData, userLoading, userError] = useFetch(userId)
    useEffect(() => {
        if (userData && !userError && !userLoading) {
            const user = new User(userData.data)
            setUser(user.model)
        }
    }, [userData, userError, userLoading])

    if (userLoading) return <p>...Loading</p>

    if (userError) return <p>Error</p>

    return (
        <>
            <Header />
            <div className='mainContainer'>
                <AsideBar />
                <main>
                    <div className='dashboard__header'>
                        <h1>Bonjour <span style={{ color: 'red' }}>
                            {user.firstName}
                        </span>
                        </h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className='dashboard'>
                        <div className="dashboard__left">
                            <div className="dashboard__left__top">
                                <UserActivity userId={userId} />
                            </div>
                            <div className="dashboard__left__bottom">
                                <UserAverageSessions userId={userId} />
                                <UserPerformance userId={userId} />
                                <UserScore userId={userId} />
                            </div>
                        </div>
                        <div className="dashboard__right">

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

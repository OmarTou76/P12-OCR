import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import './homepage.css'
import { AsideBar } from '../../components/AsideBar/AsideBar'
import { useFetch } from '../../utils/useFetch'
import { User } from '../../models/User'
import { UserActivity } from '../../components/UserActivity/UserActivity'
import { UserAverageSessions } from '../../components/UserAverageSessions/UserAverageSessions'

export const Homepage = ({ userId = 12 }) => {
    const [user, setUser] = useState({})
    const [userData, userLoading, userError] = useFetch(userId)
    useEffect(() => {
        if (userData && !userError && !userLoading) {
            setUser(new User(userData.data))
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
                        <h1>Bonjour {user.firstName}</h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className='dashboard'>
                        <div className="dashboard__left">
                            <div className="dashboard__left__top">
                                <UserActivity userId={userId} />
                            </div>
                            <div className="dashboard__left__bottom">
                                <UserAverageSessions userId={userId} />
                                <UserAverageSessions userId={userId} />
                                <UserAverageSessions userId={userId} />
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

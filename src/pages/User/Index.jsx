import React, { useEffect, useState } from 'react'
import './userPage.css'
import { useFetch } from '../../utils/useFetch'
import { User } from '../../models/User'
import { UserActivity } from '../../components/UserActivity/UserActivity'
import { UserAverageSessions } from '../../components/UserAverageSessions/UserAverageSessions'
import { UserPerformance } from '../../components/UserPerformance/UserPerformance'
import { UserScore } from '../../components/UserScore/UserScore'
import { Badge } from '../../components/Badge/Badge'
import { useParams } from 'react-router-dom'
import { ErrorPage } from '../Error'

export const UserPage = () => {
    const userId = Number(useParams().id)
    console.log(userId)
    const [user, setUser] = useState({})
    const [userData, userError, userLoading] = useFetch(userId)
    useEffect(() => {
        if (userData && !userError && !userLoading) {
            const user = new User(userData)
            setUser(user)
        }
    }, [userData, userError, userLoading])


    if (userError) {
        return <ErrorPage message={"Cet utilisateur n'existe pas ou plus."} />
    }
    return (
        <>
            {!Object.keys(user).length ? <p>...Loading</p> : (
                <>
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
                            {user.keyData.map((data, key) => (
                                <Badge key={key}
                                    color={data.backgroundColorIcon}
                                    categoryName={data.label}
                                    data={data.value + data.unit}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

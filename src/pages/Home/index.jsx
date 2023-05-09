import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

export const HomePage = () => {
    return (
        <div className='homepage'>
            <ul>
                <h1>Utilisateurs (API):</h1>
                <li>
                    <Link to={'/user/12'}>
                        Karl Dovineau
                    </Link>
                </li>
                <li>
                    <Link to={'/user/18'}>
                        Cecilia Ratorez
                    </Link>
                </li>
            </ul>
            <ul>
                <h1>Utilisateur par defaut (local): </h1>
                <li>
                    <Link to={'/user/mock'}>
                        John Doe
                    </Link>
                </li>
            </ul>
        </div>
    )
}

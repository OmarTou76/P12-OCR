import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to="/" className="header__logo">

                <img src={logo} alt="SportSee logo" height={"60%"} />
            </Link>
            <nav className='header__nav'>
                <ul>
                    <li>Acceuil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

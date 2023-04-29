import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <img src={logo} alt="SportSee logo" />
            </div>
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

import React from 'react'
import './header.css'

export const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <div></div>
                <p>SportSee</p>
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

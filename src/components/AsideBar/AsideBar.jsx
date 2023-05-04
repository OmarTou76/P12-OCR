import React from 'react'
import './asideBar.css'
import { IconBadge } from '../IconBadge/IconBadge'

export const AsideBar = () => {
    return (
        <aside>
            <div className="aside__section">
                <IconBadge name="yoga" />
                <IconBadge name="swim" />
                <IconBadge name="bike" />
                <IconBadge name="gym" />
            </div>
            <div className="aside__copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
        </aside>
    )
}

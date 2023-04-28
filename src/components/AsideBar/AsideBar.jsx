import React from 'react'
import './asideBar.css'
import gym from '../../assets/gym.png'
import swim from '../../assets/swim.png'
import yoga from '../../assets/yoga.png'
import bike from '../../assets/bike.png'
import { IconBadge } from '../IconBadge/IconBadge'

export const AsideBar = () => {
    return (
        <aside>
            <div className="aside__section">
                <IconBadge name="yoga" icon={yoga} />
                <IconBadge name="swim" icon={swim} />
                <IconBadge name="bike" icon={bike} />
                <IconBadge name="gym" icon={gym} />
            </div>
            <div className="aside__copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
        </aside>
    )
}

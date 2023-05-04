import React from 'react'
import "./iconBadge.css"
import { ICONSPORTS } from '../../models/images'

export const IconBadge = ({ name }) => {
    return (
        <div className='iconBadge'>
            <img src={ICONSPORTS[name]} alt={name + " icon"} />
        </div>
    )
}

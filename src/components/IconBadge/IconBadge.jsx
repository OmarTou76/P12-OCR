import React from 'react'
import "./iconBadge.css"

export const IconBadge = ({ icon, name }) => {
    return (
        <div className='iconBadge'>
            <img src={icon} alt={name + " icon"} />
        </div>
    )
}

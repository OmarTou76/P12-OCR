import React from 'react'
import './badge.css'
import { ICON } from '../../models/images'

export const Badge = ({ data, categoryName, iconName, color }) => {

    return (
        <div className='badge'>
            <div className='badge__icon' style={{ background: color }}>
                <img src={ICON[iconName]} alt="icon" />
            </div>
            <div className='badge__details'>
                <p className='badge__data'>{data}</p>
                <p>{categoryName}</p>
            </div>
        </div>
    )
}

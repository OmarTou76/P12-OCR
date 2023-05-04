import React from 'react'
import './badge.css'
import { ICON } from '../../models/images'
import PropTypes from 'prop-types'

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

Badge.propTypes = {
    data: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}
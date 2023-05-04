import React from 'react'
import "./iconBadge.css"
import { ICONSPORTS } from '../../models/images'
import PropTypes from 'prop-types'

export const IconBadge = ({ name }) => {
    return (
        <div className='iconBadge'>
            <img src={ICONSPORTS[name]} alt={name + " icon"} />
        </div>
    )
}

IconBadge.propTypes = {
    name: PropTypes.string,
}
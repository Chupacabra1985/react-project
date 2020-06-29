import React from 'react'
import styles from './Card.scss'
import PropTypes from 'prop-types'

const Card = props => (
    <h5 className={styles.component}>{props.title}</h5>
);

Card.PropTypes = {
    title: PropTypes.string.isRequired
}

export default Card;
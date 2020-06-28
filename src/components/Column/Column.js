import React from 'react'
import styles from './Column.scss'
import PropTypes from 'prop-types'

const Column = props => (
    <section className={styles.component}>
        <h3 className={styles.title}>{props.name}</h3>
    </section>
)

Column.propTypes = {
    name: PropTypes.string.isRequired
}

export default Column;
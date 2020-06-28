import React from 'react'
import styles from './List.scss'
import Hero from "../Hero/Hero";
import Column from "../Column/Column"
import PropTypes from 'prop-types'

class List extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} image={this.props.image}/>
                <div className={styles.columns}>
                    <Column name='Animals'/>
                    <Column name='Plants'/>
                    <Column name='Minerals'/>
                </div>
            </section>
        )
    }
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default List;
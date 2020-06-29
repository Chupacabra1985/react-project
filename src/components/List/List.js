import React from 'react'
import styles from './List.scss'
import Hero from "../Hero/Hero";
import Column from "../Column/Column"
import PropTypes from 'prop-types'
import Creator from "../Creator/Creator";
import {settings} from "../../data/dataStore";

class List extends React.Component {
    state = {
        columns: this.props.columns || [],
    }
    addColumn(title){
        this.setState(state => (
            {
                columns: [
                    ...state.columns,
                    {
                        key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: []
                    }
                ]
            }
        ));
    }
    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} image={this.props.image}/>
                <div className={styles.columns}>
                    {this.state.columns.map(({key, ...columnProps}) =>(
                        <Column key={key} {...columnProps}/>
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
                </div>
            </section>
        )
    }
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array
}

export default List;
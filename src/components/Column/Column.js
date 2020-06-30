import React from 'react'
import styles from './Column.scss'
import PropTypes from 'prop-types'
import Creator from "../Creator/Creator";
import {settings} from "../../data/dataStore";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }
    addCard(title){
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                        title,
                    }
                ]
            }
        ));
    }
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title} <span className={styles.icon}><Icon name={this.props.icon}/></span></h3>
                    {this.state.cards.map(({key, ...cardProps}) =>(
                        <Card key={key} {...cardProps}/>
                    ))}
                <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </section>
        );
    }

}

Column.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    cards: PropTypes.array
}

export default Column;
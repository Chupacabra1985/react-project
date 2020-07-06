import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator';
//import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class Column extends React.Component {

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon}/></span></h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/*<Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>*/}
      </section>
    );
  }

}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  cards: PropTypes.array,
};

export default Column;
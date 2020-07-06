import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {title} = this.props;
    return (
      <h5 className={styles.component}>{title}</h5>
    );
  }
}

Card.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
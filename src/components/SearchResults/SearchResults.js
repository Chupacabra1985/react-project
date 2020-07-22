import React from 'react';
import styles from './SerchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  render() {
    console.log(this.props);
    const {cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      </Container>
    );
  }

}

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;
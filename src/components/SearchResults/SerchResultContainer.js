import {connect} from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  const cardList = state.cards.filter(card => new RegExp(searchString, 'i').test(card.title));
  return {
    cards: cardList,
  };
};

export default connect(mapStateToProps)(SearchResults);
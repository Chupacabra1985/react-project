import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSerchedCards} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getSerchedCards(state, props),
});

export default connect(mapStateToProps)(SearchResults);
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Info from '../Info/Info';
import Home from '../Home/HomeContainer';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/Faq';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';
import SearchResultsContainer from '../SearchResults/SerchResultContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:searchString"  component={SearchResultsContainer}/>
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
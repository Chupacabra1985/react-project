import React from 'react';
import style from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={style.component}>
    <h2 className={style.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img src={props.image} className={style.image} alt='foto'/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
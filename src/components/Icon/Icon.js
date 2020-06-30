import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.PropTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

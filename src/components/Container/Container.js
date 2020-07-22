import React from 'react';
import styles from './Container.scss';

const Container = props => (
  // eslint-disable-next-line react/prop-types
  <div className={styles.component}>{props.children}</div>
);

export default Container;




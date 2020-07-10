import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class List extends React.Component {

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    );
  }
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

export default List;
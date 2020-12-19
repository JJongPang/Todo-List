import React from 'react';
import styles from './Category-Item.module.css';

const CategoryItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <p>{item}</p>
    </li>
  );
};

export default CategoryItem;

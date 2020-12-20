import React, { useState } from 'react';
import CategoryItem from '../category-item/Category-Item';
import Button from '../../common/Button';
import styles from './Category-List.module.css';

const CategoryList = () => {
  const [items, setItems] = useState(['중요', 'Javascript', 'Python']);

  return (
    <section className={styles.category}>
      <h1 className={styles.title}>카테고리 등록</h1>
      <Button to="/category">추가</Button>
      <ul className={styles.list}>
        {items.map((item) => (
          <CategoryItem key={item} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;

import React from 'react';
import CategoryContainer from '../../containers/category/CategoryContainer';
import HeaderContainer from '../../containers/common/HeaderContainer';
import styles from './PostListPage.module.css';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <div className={styles.box}>
        <CategoryContainer />
        <h1>안녕하세요</h1>
      </div>
    </div>
  );
};

export default PostListPage;

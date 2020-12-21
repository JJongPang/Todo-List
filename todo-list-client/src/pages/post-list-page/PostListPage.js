import React from 'react';
import CategoryList from '../../component/category-list/CategoryList';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PostListContainer from '../../containers/posts/PostListContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <CategoryList />
      <PostListContainer />
    </div>
  );
};

export default PostListPage;

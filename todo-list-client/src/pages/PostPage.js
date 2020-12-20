import React from 'react';
import PostViewer from '../component/post/PostViewer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostViewerContainer />
    </div>
  );
};

export default PostPage;

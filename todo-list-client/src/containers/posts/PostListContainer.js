import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../../modules/posts';
import qs from 'qs';
import PostList from '../../component/posts/PostList';
import { withRouter } from 'react-router-dom';

const PostListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { posts, error, user, loading } = useSelector(
    ({ posts, error, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  useEffect(() => {
    const { username } = match.params;
    const { tag } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username }));
  }, [dispatch, location.search]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default withRouter(PostListContainer);

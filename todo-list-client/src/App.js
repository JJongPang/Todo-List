import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/post-list-page/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>BOOKMAKER</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" exact />
      <Route component={RegisterPage} path="/register" exact />
      <Route component={WritePage} path="/write" exact />
      <Route component={CategoryPage} path="/category" exact />
      <Route component={PostPage} path="/@:username/:postId" exact />
    </div>
  );
};

export default App;

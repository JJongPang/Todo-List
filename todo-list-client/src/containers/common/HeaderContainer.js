import React from 'react';
import Header from '../../component/common/Header';
import { useSelector } from 'react-redux';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <Header user={user} />;
};

export default HeaderContainer;

import React from 'react';
import AuthForm from '../component/auth/AuthForm';
import AuthTemplate from '../component/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;

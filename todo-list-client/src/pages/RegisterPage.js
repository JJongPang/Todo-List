import React from 'react';
import AuthForm from '../component/auth/AuthForm';
import AuthTemplate from '../component/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;

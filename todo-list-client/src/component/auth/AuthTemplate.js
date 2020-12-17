import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AuthTemplateBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AuthTemplate = ({ children }) => {
  console.log(children);
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const CategoryTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const CategoryTemplate = ({ children }) => {
  return (
    <CategoryTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">BOOKMARK</Link>
        </div>
        {children}
      </WhiteBox>
    </CategoryTemplateBlock>
  );
};

export default CategoryTemplate;

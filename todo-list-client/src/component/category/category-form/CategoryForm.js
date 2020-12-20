import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '../../common/Button';

const CategoryFormBlock = styled.div`
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

const ColorItem = ({ color }) => {
  return (
    <li>
      <Button>{color}</Button>
    </li>
  );
};

const ColorList = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <ColorItem color={color} />
      ))}
    </ul>
  );
};

const CategoryForm = () => {
  const [colors, setColors] = useState([
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'Indigo',
    'purple',
    'black',
  ]);

  return (
    <CategoryFormBlock>
      <h3>카테고리 등록</h3>
      <StyledInput name="title" placeholder="카테고리" />
      <ColorList colors={colors} />
    </CategoryFormBlock>
  );
};

export default CategoryForm;

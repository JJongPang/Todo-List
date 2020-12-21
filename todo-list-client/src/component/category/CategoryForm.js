import React from 'react';
import styled from 'styled-components';
import CategoryWriteActionButtonContainer from '../../containers/category/CategoryWriteActionButtonContainer';
import palette from '../../lib/styles/palette';
import CategoryActionButton from './CategoryActionButton';

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

const CategoryForm = ({ onChangeField }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChangeColor = (e) => {
    onChangeField({ key: 'color', value: e.target.value });
  };
  return (
    <CategoryFormBlock>
      <h3>카테고리</h3>
      <StyledInput placeholder="카테고리 입력" onChange={onChangeTitle} />
      <StyledInput placeholder="색상" onChange={onChangeColor} />
    </CategoryFormBlock>
  );
};

export default CategoryForm;

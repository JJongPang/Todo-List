import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const CategoryActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 2rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const CategoryActionButton = ({ onCancel, onPublish }) => {
  return (
    <CategoryActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        카테고리 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </CategoryActionButtonsBlock>
  );
};

export default CategoryActionButton;

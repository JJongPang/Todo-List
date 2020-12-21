import React, { useState } from 'react';
import AskCategoryEditModal from '../category-write/AskCategoryEditModal';
import Button from '../common/Button';

const CategoryList = () => {
  const [modal, setModal] = useState(false);

  const onPublishClick = () => {
    setModal(true);
  };
  return (
    <div>
      <h2>카테고리 등록</h2>
      <Button onClick={onPublishClick}>추가</Button>
      <AskCategoryEditModal visible={modal} />
    </div>
  );
};

export default CategoryList;

import React from 'react';
import CategoryTemplate from '../component/category/CategoryTemplate';
import CategoryContainer from '../containers/category/CategoryContainer';
import CategoryWriteActionButtonContainer from '../containers/category/CategoryWriteActionButtonContainer';

const CategoryPage = () => {
  return (
    <CategoryTemplate>
      <CategoryContainer />
      <CategoryWriteActionButtonContainer />
    </CategoryTemplate>
  );
};

export default CategoryPage;

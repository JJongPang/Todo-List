import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryActionButton from '../../component/category/CategoryActionButton';
import { categoryWritePost } from '../../modules/catoryWrite';

const CategoryWriteActionButtonConatainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, color, category, categoryError } = useSelector(
    ({ categoryWrite }) => ({
      title: categoryWrite.title,
      color: categoryWrite.color,
      category: categoryWrite.category,
      categoryError: categoryWrite.categoryError,
    }),
  );

  const onPublish = () => {
    dispatch(
      categoryWritePost({
        title,
        color,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (category) {
      history.push('/');
    }
    if (categoryError) {
      console.log(categoryError);
    }
  }, [history, category, categoryError]);

  return <CategoryActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(CategoryWriteActionButtonConatainer);

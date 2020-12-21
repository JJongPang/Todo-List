import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryForm from '../../component/category/CategoryForm';
import { changeField, initialize } from '../../modules/catoryWrite';

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const { title, color } = useSelector(({ categoryWrite }) => ({
    title: categoryWrite.title,
    color: categoryWrite.color,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <CategoryForm onChangeField={onChangeField} title={title} color={color} />
  );
};

export default CategoryContainer;

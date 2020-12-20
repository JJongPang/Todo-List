import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../component/write/TagBox';
import { changeField } from '../../modules/write';

const TagboxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.write.tags);

  const onChageTags = (nextTags) => {
    dispatch(
      changeField({
        key: 'tags',
        value: nextTags,
      }),
    );
  };

  return <TagBox onChageTags={onChageTags} tags={tags} />;
};

export default TagboxContainer;

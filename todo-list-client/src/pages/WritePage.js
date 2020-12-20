import React from 'react';
import Responsive from '../component/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagboxContainer from '../containers/write/TagboxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagboxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
};

export default WritePage;

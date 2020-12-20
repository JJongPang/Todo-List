import React from 'react';
import Responsive from '../component/common/Responsive';
import Editor from '../component/write/Editor';
import TagBox from '../component/write/TagBox';
import WriteActionButtons from '../component/write/WriteActionButtons';
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

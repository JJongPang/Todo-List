import React from 'react';
import { Helmet } from 'react-helmet-async';
import Responsive from '../component/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagboxContainer from '../containers/write/TagboxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - BOOKMAKER</title>
      </Helmet>
      <EditorContainer />
      <TagboxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
};

export default WritePage;

import React from 'react';
import AskModal from '../common/AskModal';
import CategoryWriteForm from './CategoryWriteForm';

const AskCategoryEditModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="카테고리 등록"
      description={<CategoryWriteForm />}
    />
  );
};

export default AskCategoryEditModal;

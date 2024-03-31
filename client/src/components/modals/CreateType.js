import React, { useState } from 'react';
import styled from 'styled-components';
import { createType } from '../../http/deviceAPI';

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

const CloseButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

const AddButton = styled(Button)`
  background-color: #28a745;
  color: white;
`;

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addType = () => {
    createType({ name: value }).then(data => {
      setValue('');
      onHide();
    });
  };

  return (
    <StyledModal show={show}>
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>Добавить тип</ModalTitle>
          <ModalCloseButton onClick={onHide}>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Введите название типа"
          />
        </ModalBody>
        <ModalFooter>
          <CloseButton onClick={onHide}>Закрыть</CloseButton>
          <AddButton onClick={addType}>Добавить</AddButton>
        </ModalFooter>
      </ModalWrapper>
    </StyledModal>
  );
};

export default CreateType;

import React, { useState } from 'react';
import styled from 'styled-components';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
`;

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <StyledContainer>
      <StyledButton onClick={() => setTypeVisible(true)}>Добавить тип</StyledButton>
      <StyledButton onClick={() => setDeviceVisible(true)}>Добавить устройство</StyledButton>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </StyledContainer>
  );
};

export default Admin;

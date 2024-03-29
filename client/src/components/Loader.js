import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderSpiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderBar = styled.div`
  width: 200px;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
`;

const progressAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const LoaderProgress = styled.div`
  width: 0;
  height: 100%;
  background-color: #838383;
  animation: ${progressAnimation} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderSpiner>
      <LoaderBar>
        <LoaderProgress />
      </LoaderBar>
    </LoaderSpiner>
  );
};

export default Loader;

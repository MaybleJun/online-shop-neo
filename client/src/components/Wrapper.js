import React from "react";
import styled from "styled-components";

const WrapperStyle = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

function Wrapper({ children }) {
  return (
    <>
      <WrapperStyle>{children}</WrapperStyle>
    </>
  );
}

export default Wrapper;
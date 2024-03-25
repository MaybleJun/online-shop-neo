import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { useStore } from "../store";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";

const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.span`
  font-family: var(--family);
  color: red;
  font-weight: var(--fw-mediun);
`;

const langObj = {
  ru: "Рус",
  en: "Eng",
};

const Main = observer(() => {
  const { cardStore } = useStore();

  useEffect(() => {
    cardStore.fetchCard();
  }, [cardStore]);

  const { loading, error } = cardStore; 

  return (
    <>
      <NavBar />
      <MainBlock>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <CardList title="Карточки товаров" />
        )}
      </MainBlock>
      <Footer footerLang={langObj} />
    </>
  );
});

export default Main;

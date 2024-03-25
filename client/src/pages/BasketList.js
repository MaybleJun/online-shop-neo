import React, { useEffect } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardsShop from "../components/CardsShop";

const langObj = {
  kz: "Каз",
  ru: "Рус",
  en: "Eng",
};
const MainBlock = styled.main``;

const BasketList = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <NavBar />
      <MainBlock>
        <CardsShop />
      </MainBlock>
      <Footer footerLang={langObj} />
    </>
  );
};

export default BasketList;
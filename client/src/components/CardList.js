import React, { useEffect } from "react";
import { observer } from "mobx-react-lite"; 
import { useTranslation } from "react-i18next";
import { useStore } from "../store"; 
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Card from "./Card";

const TitleStyle = styled.h2`
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const SectionStyle = styled.section`
  padding-top: 30px;
`;

const CardList = observer(({ title }) => {
  const { cardStore } = useStore();

  const { headphones = [], wireless_headphones = [] } = cardStore.cards; 

  const { t } = useTranslation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Wrapper>
      <SectionStyle>
        <TitleStyle>{t("headphones")}</TitleStyle>
        <CardsBlock>
          {headphones.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </CardsBlock>
      </SectionStyle>
      <SectionStyle>
        <TitleStyle>{t("Wireless_headphones")}</TitleStyle>
        <CardsBlock>
          {wireless_headphones.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </CardsBlock>
      </SectionStyle>
    </Wrapper>
  );
});

export default CardList;

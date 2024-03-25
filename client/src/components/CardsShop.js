import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Wrapper from "./Wrapper";
import CardsShopItem from "./CardsShopItem";
import { useLocalStore } from "mobx-react-lite";

const ShopCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const TitleStyle = styled.h2`
  margin: 0;
  padding: 0;
  font-family: var(--family);
  color: #838383;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ShopCardsSum = styled.div`
  width: 350px;
  background-color: white;
  position: relative;
  border-radius: var(--radius);
  padding: 22px;
  display: flex;
  justify-content: space-between;
  height: 120px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const ShopCardsButton = styled.button`
  position: absolute;
  width: 100%;
  background: #101010;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: var(--fw-semibold);
  font-size: 17px;
  height: 65px;
  border-radius: 20px;
  font-family: var(--family);
  bottom: 0;
  left: 0;
  &:disabled {
    cursor: not-allowed;
    background-color: #838383;
  }
`;

const ShopCardText = styled.span`
  font-family: var(--family);
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  position: relative;
`;

const ShopCardItems = styled.div`
  max-width: 633px;
  width: 100%;
`;

const SectionStyle = styled.section`
  padding-top: 30px;
`;

const CardsShop = () => {
  const { t } = useTranslation();

  const cardStore = useLocalStore(() => ({
    shopCards: [],
    getTotal() {
      let totalPrice = 0;
      this.shopCards.forEach((item) => {
        totalPrice += item.price * item.count;
      });
      return totalPrice;
    }
  }));

  return (
    <Wrapper>
      <SectionStyle>
        <TitleStyle>{t("cart")}</TitleStyle>
        <ShopCardContent>
          <ShopCardItems>
            {cardStore.shopCards.map((item) => (
              <CardsShopItem key={item.id} {...item} />
            ))}
          </ShopCardItems>

          <ShopCardsSum>
            <ShopCardText>{t("total")}:</ShopCardText>
            <ShopCardText>
              {cardStore.getTotal().toLocaleString(undefined, {
                style: "currency",
                currency: "RUB"
              })}
            </ShopCardText>
            <ShopCardsButton disabled={cardStore.getTotal() === 0}>
              {t("payment")}
            </ShopCardsButton>
          </ShopCardsSum>
        </ShopCardContent>
      </SectionStyle>
    </Wrapper>
  );
};

export default CardsShop;

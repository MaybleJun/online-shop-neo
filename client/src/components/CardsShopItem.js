import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import cardStore from "../store/CardStore";

const ShopCardItems = styled.div`
  position: relative;
  width: 100%;
  max-width: 633px;
  height: 218px;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding-left: 18px;
  padding-top: 17px;
  padding-right: 28px;
  margin-bottom: 17px;
  display: grid;
  grid-template-columns: 170px 1fr;
  grid-template-rows: 152px 36px;
  align-items: center;
  grid-template-areas:
    "A B"
    "C D";
`;

const ShopCardImg = styled.img`
  width: 146px;
  height: 136px;
`;

const IconRemove = styled.i`
  position: absolute;
  top: 17px;
  right: 28px;
  font-size: 19px;
  color: #df6464;
  cursor: pointer;
`;

const ShopCardCountButton = styled.button`
  background: #ffce7f;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: var(--fw-semibold);
  font-family: var(--family);
  width: 35.17px;
  height: 30px;
  border-radius: 50%;
  font-size: 30px;
  line-height: 0;
  font-weight: var(--fw-regular);
`;

const ShopCardPrice = styled.span`
  font-family: var(--family);
  color: #aaaaaa;
  font-size: 15px;
  font-weight: var(--fw-semibold);
  width: 100%;
`;

const ShopCardTitle = styled.h3`
  font-family: var(--family);
  color: #1c1c27;
  font-weight: var(--fw-mediun);
  font-size: 17px;
  margin: 0;
  padding-top: 23px;
  margin-bottom: 12px;
  width: 100%;
`;

const ShopCardCount = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  grid-area: C;
  width: 125px;
`;

const ShopCardTitlePrice = styled.div`
  grid-area: B;
  align-self: center;
  width: 100%;
`;

const ShopCardTotalPrice = styled.span`
  font-family: var(--family);
  color: #1c1c27;
  font-size: 15px;
  font-weight: var(--fw-semibold);
  grid-area: D;
  text-align: right;
  width: 100%;
`;

const CardsShopItem = observer(({ item }) => {
  const { img, price, title, count } = item;

  const onClick = () => {
    cardStore.removeShopItem(item);
  };

  const incrementCount = () => {
    cardStore.increment(item);
  };

  const decrementCount = () => {
    cardStore.decrement(item);
  };

  const locCurrency = (price, grouping) => {
    const locale = navigator.language;
    const LocaleOptions = {
      style: "currency",
      currency: "RUB",
      currencyDisplay: "symbol",
      useGrouping: grouping,
      minimumFractionDigits: 0,
    };
    return price.toLocaleString(locale, LocaleOptions);
  };

return (
    <>
      <ShopCardItems>
        <ShopCardImg src={process.env.PUBLIC_URL + img}></ShopCardImg>
        <ShopCardTitlePrice>
          <ShopCardTitle>{title}</ShopCardTitle>
          <ShopCardPrice>{locCurrency(price, true)}</ShopCardPrice>
        </ShopCardTitlePrice>

        <ShopCardCount>
          <ShopCardCountButton onClick={decrementCount}>-</ShopCardCountButton>
          {count}
          <ShopCardCountButton onClick={incrementCount}>+</ShopCardCountButton>
        </ShopCardCount>
        <ShopCardTotalPrice>
          {locCurrency(price * count, true)}
        </ShopCardTotalPrice>

        <IconRemove className="i-del" onClick={onClick} />
      </ShopCardItems>
    </>
  );
});

export default CardsShopItem;
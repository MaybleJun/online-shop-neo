import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";


const CardImgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 308px;
`;
const CardImg = styled.img``;

const CardItem = styled.div`
  width: 350px;
  height: 407px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: var(--radius);
  padding-left: 21px;
  padding-right: 21px;
  padding-bottom: 26px;
`;

const CardTitle = styled.span`
  font-size: 17px;
  font-weight: var(--fw-semibold);
  text-align: left;
`;

const CardPrice = styled.span`
  color: #ffa542;
  font-weight: var(--fw-semibold);
  font-size: 17px;
  text-align: right;
`;

const RateBlock = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;
const IconRate = styled.i`
  color: #ffce7f;
  font-size: 24px;
  padding-right: 10px;
`;

const CardRate = styled.span`
  color: #838383;
  font-weight: var(--fw-semibold);
  font-size: 17px;
`;

const CardPayButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: var(--fw-semibold);
  color: #000000;
  font-size: 17px;
  text-align: right;
  padding: 0;
  align-self: end;
`;

const CardPriceDiscontBlock = styled.div`
  text-align: right;
`;
const CardPriceDiscount = styled.span`
  font-family: var(--family);
  color: #ffce7f;
  text-decoration-line: line-through;
  font-size: 13px;
  font-weight: var(--fw-semibold);
  padding-right: 10px;
  margin-bottom: 9px;
`;

const CardFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 21px 25px 25px;
`;

const DeviceItem = ({device})  => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <CardItem onClick={() => navigate.push(DEVICE_ROUTE + '/' + device.id)}>
        <CardImgBlock>
          <CardImg src={process.env.REACT_APP_API_URL + device.img} />
        </CardImgBlock>

        <CardFooter>
          <CardTitle>{device.title}</CardTitle>
          <CardPrice>{device.price - device.discount}</CardPrice>
          <CardPriceDiscontBlock>
            {device.discount && <CardPriceDiscount>{device.price}</CardPriceDiscount>}
          </CardPriceDiscontBlock>
          <RateBlock>
            <IconRate className="i-rate" />
            <CardRate>{device.rate}</CardRate>
          </RateBlock>
          <CardPayButton /*onClick={onClick}*/>{t("buy")}</CardPayButton>
        </CardFooter>
      </CardItem>
    </>
  );
};

export default DeviceItem;

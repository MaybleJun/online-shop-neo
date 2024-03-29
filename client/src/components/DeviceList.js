import React,  {useContext} from "react";
import { observer } from "mobx-react-lite"; 
import { useTranslation } from "react-i18next";
import {Context} from "../index";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import DeviceItem from "./DeviceItem";

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

const DeviceList = observer(() => {
  const {device} = useContext(Context)

  

  const { t } = useTranslation()


  return (
    <Wrapper>
      <SectionStyle>
        <TitleStyle>{t("headphones")}</TitleStyle>
        <CardsBlock>
        {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </CardsBlock>
      </SectionStyle>
      <SectionStyle>
        <TitleStyle>{t("Wireless_headphones")}</TitleStyle>
        <CardsBlock>
        {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </CardsBlock>
      </SectionStyle>
    </Wrapper>
  );
});

export default DeviceList;

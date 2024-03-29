import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import Wrapper from "../components/Wrapper";

const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const langObj = {
  ru: "Рус",
  en: "Eng",
};

const ShopMain = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      // fetchBrands().then(data => device.setBrands(data))
      fetchDevices(null, null, 1, 2).then(data => {
          device.setDevices(data.rows)
          device.setTotalCount(data.count)
      })
  }, [])

  useEffect(() => {
      fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
          device.setDevices(data.rows)
          device.setTotalCount(data.count)
      })
  }, [device.page, device.selectedType, device.selectedBrand,])


  return (
    <Wrapper>
      <NavBar />
      <TypeBar />
      <MainBlock>
          <DeviceList title="Карточки товаров" />
      </MainBlock>
      <Footer footerLang={langObj} />
    </Wrapper>
  );
});

export default ShopMain;

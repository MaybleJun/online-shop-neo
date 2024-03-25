import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from './Wrapper';

const FooterLogo = styled(NavLink)`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
  text-decoration: none;
  @media (max-width: 768px) {
    grid-area: A;
  }
`;

const FooterBlock = styled.footer``;

const FooterContent = styled.div`
  background-color: white;
  padding-top: 32px;
  padding-left: 29px;
  padding-right: 29px;
  padding-bottom: 32px;
  border-radius: var(--radius) var(--radius) 0px 0px;
  display: grid;
  grid-template-columns: 317px 277px repeat(1, 1fr);
  grid-template-rows: 82px;
  height: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 80px;
    gap: 0px 0px;
    grid-template-areas:
      'A A'
      'B C'
      'D D';
    justify-items: center;
    justify-items: center;
    justify-items: center;
    padding-top: 22px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 22px;
  }
`;
const FooterNavLink = styled(NavLink)`
  font-family: var(--family);
  color: #000000;
  font-size: 17px;
  font-weight: var(--fw-regular);
  display: block;
  line-height: 31px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-decoration-color: #838383;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;

const FooterLink = styled.a.attrs({
  href: '#',
})`
  font-family: var(--family);
  color: #000000;
  font-size: 17px;
  font-weight: var(--fw-regular);
  display: block;
  line-height: 31px;
  text-decoration: none;
`;

const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    grid-area: B;
  }
`;
const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    grid-area: C;
  }
`;

const IconLang = styled.i`
  padding-right: 19px;
  font-size: 17px;
`;
const IconVK = styled.i`
  font-size: 30px;
`;
const IconTelegram = styled.i`
  font-size: 30px;
`;
const IconWhatsapp = styled.i`
  font-size: 28px;
`;

const LangBlock = styled.div`
  display: flex;
`;

const SocialLinkBlock = styled.div`
  display: flex;
  gap: 18px;
  padding-left: 8px;
  justify-content: flex-end;
  grid-area: 1 / 4 / 2 / 5;
  @media (max-width: 768px) {
    grid-area: D;
    align-items: end;
  }
`;
const SelectLang = styled.div`
  display: flex;
  gap: 10px;
`;
const SelectLangInput = styled.input.attrs({
  type: 'radio',
})`
  display: none;
  &:checked ~ label {
    font-family: var(--famyli);
    color: #ffa542;
    font-weight: var(--fw-bold);
  }
`;
const SelectLangLabel = styled.label`
  font-family: var(--famyli);
  color: #101010;
  font-weight: var(--fw-mediun);
  cursor: pointer;
`;

const Footer = (props) => {
  const { footerLang = {} } = props;
  const { t, i18n } = useTranslation();

  const [toggleLang, setToggleLang] = useState('ru');

  const selectLang = (e) => {
    i18n.changeLanguage(e.target.value);
    setToggleLang(e.target.value);
  };

  useEffect(() => {
    for (let value of Object.keys(footerLang)) {
      if (value === i18n.language) {
        setToggleLang('ru');
      }
    }
  }, [i18n.language, footerLang]);

  return (
    <Wrapper>
      <FooterBlock>
        <FooterContent>
          <FooterLogo to="/">QPICK</FooterLogo>
          <FlexBox1>
            <FooterNavLink to="/favourites">{t('favourites')}</FooterNavLink>
            <FooterNavLink to="/shoplist">{t('cart')}</FooterNavLink>
            <FooterNavLink to="/contacts">{t('сontacts')}</FooterNavLink>
          </FlexBox1>
          <FlexBox2>
            <FooterNavLink to="/requirement">{t('requirement')}</FooterNavLink>
            <LangBlock>
              <IconLang className="i-language" />
              <SelectLang>
                {Object.entries(footerLang).map(([key, value], i) => (
                  <div key={i}>
                    <SelectLangInput
                      value={key}
                      id={key}
                      name="select-lang"
                      onChange={selectLang}
                      defaultChecked={toggleLang === key}
                      />
                      <SelectLangLabel htmlFor={key}>{value}</SelectLangLabel>
                    </div>
                  ))}
                </SelectLang>
              </LangBlock>
            </FlexBox2>
            <SocialLinkBlock>
              <FooterLink>
                <IconVK className="i-VK" />
              </FooterLink>
              <FooterLink>
                <IconTelegram className="i-Telegram" />
              </FooterLink>
              <FooterLink>
                <IconWhatsapp className="i-Whatsapp" />
              </FooterLink>
            </SocialLinkBlock>
          </FooterContent>
        </FooterBlock>
      </Wrapper>
    );
  };
  
  export default Footer;
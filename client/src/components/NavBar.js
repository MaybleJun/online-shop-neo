import React, { useContext } from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE} from "../utils/consts";
import {useNavigate} from 'react-router-dom';

    // const Header: React.FC<HeaderProps> = () => {
    //     const { shopCards = [] } = useSelector((state: any) => state.Card);
    //     let arrayLength = shopCards.length;
        
    const Logo = styled.span`
  font-family: var(--family);
  color: #101010;
  font-weight: var(--fw-bold);
  font-size: 25px;
`;

const NavbarBlock = styled.header`
  padding-top: 16px;
  margin-bottom: 15px;
`;

const IconsBlock = styled.div`
  display: flex;
  gap: 45px;
  padding-right: 25px;
`;

const FavoriteIcon = styled.i`
  color: #838383;
  position: relative;
  font-size: 21px;
`;

const ShoppingCartIcon = styled.i`
  color: #838383;
  position: relative;
  font-size: 22px;
`;

const Counter = styled.span.attrs({})`
  background-color: #ffa542;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  font-size: 15px;
  font-weight: var(--fw-mediun);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 16px;
  bottom: 10px;
  font-family: var(--family);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  max-width: 1135px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;
const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
}



    return (
        <NavbarBlock>
             <Wrapper>
                <Content>
                    <NavbarLink to={SHOP_ROUTE}>
                        <Logo>QPICK</Logo>
                    </NavbarLink>
                {user.isAuth ?
                     <IconsBlock>
                      <NavbarLink  onClick={() => navigate.push(ADMIN_ROUTE)}>
                       <FavoriteIcon className="i-admin">
                        Admin
                       </FavoriteIcon>
                     </NavbarLink>

                       <NavbarLink  onClick={() => logOut()}>
                       <FavoriteIcon className="i-exit" >
                        Exit
                       </FavoriteIcon>
                     </NavbarLink>

                     <NavbarLink  onClick={() => navigate.push(FAVORITE_ROUTE)}>
                       <FavoriteIcon className="i-fav">
                         <Counter>2</Counter>
                       </FavoriteIcon>
                     </NavbarLink>

                     <NavbarLink to={BASKET_ROUTE}>
                       <ShoppingCartIcon className="i-shopping">
                         {/* {arrayLength !== 0 && <Counter>{arrayLength}</Counter>} */}
                       </ShoppingCartIcon>
                     </NavbarLink>
                   </IconsBlock>
                    :
                    <IconsBlock>
                        <NavbarLink onClick={() => navigate.push(LOGIN_ROUTE)}>Login</NavbarLink>
                    </IconsBlock>
                }
                </Content>
            </Wrapper>
        </NavbarBlock>

    );
});

export default NavBar;
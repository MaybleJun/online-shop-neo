import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 54px);
`;

const AuthCard = styled.div`
  width: 600px;
  padding: 20px;
`;

const Title = styled.h2`
  margin: auto;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AuthInput = styled.input`
  margin-top: 10px;
  padding: 10px;
`;

const AuthButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  outline: none;
  background-color: ${(props) => (props.login ? 'green' : 'blue')};
  color: white;
  cursor: pointer;
`;

const AuthLink = styled(NavLink)`
  margin-top: 10px;
  text-align: center;
  color: blue;
`;

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container>
      <AuthCard>
        <Title>{isLogin ? 'Авторизация' : 'Регистрация'}</Title>
        <AuthForm>
          <AuthInput
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div>
            {isLogin ? (
              <span>
                Нет аккаунта? <AuthLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</AuthLink>
              </span>
            ) : (
              <span>
                Есть аккаунт? <AuthLink to={LOGIN_ROUTE}>Войдите!</AuthLink>
              </span>
            )}
          </div>
          <AuthButton login={isLogin ? 1 : 0} onClick={click}>
            {isLogin ? 'Войти' : 'Регистрация'}
          </AuthButton>
        </AuthForm>
      </AuthCard>
    </Container>
  );
});

export default Auth;

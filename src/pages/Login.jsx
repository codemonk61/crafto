
/** @jsxImportSource @emotion/react */
import { useEffect, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Text from '../components/Text';
import { login } from '../services/quote';
import Input from '../components/Input';
import Button from '../components/Button';
import { AuthContext } from '../authContext/AuthContext';

const styles = {
  wrapper: css`
     padding: 24px;
     width: 300px;
     background-color: white;
     border: 1px solid #7e8dfa;
     border-radius: 4px;
    `
}

const Login = () => {

  const context = useContext(AuthContext)
  const navigate = useNavigate()

  const { user, setUser} = context

  const handleLoginClick = async () => {

    try {
      const response = await login(user.username, user.otp);
      localStorage.setItem('token', response.token);
      setUser({...user, username: user.username, isLoggedIn: true })
     navigate('/quoteList')
    } catch (error) {
      console.error('Login failed:', error);
      setUser({...user, isLoggedIn: false })
   
    }
  };

  const isDisable = !(user.otp.length && user.username.length)

  return (
    <div css={styles.wrapper}>
      <Text
        text="Sign In"
        fontSize="30px"
        fontWeight="bold"
        alignment="left"
        marginBottom={"12px"}
      />
      <Text
        text="Enter Username:"
        fontSize="14px"
        alignment="left"
        marginTop={"16px"}
        marginBottom={"8px"}
      />
      <Input
        type="text"
        placeholder="Enter username"
        value={user.username}
        height={"35px"}
        onChange={(e) => setUser({...user, username: e.target.value})}
      />
      <Text
        text="Enter OTP:"
        fontSize="14px"
        alignment="left"
        marginTop={"16px"}
        marginBottom={"8px"}

      />
      <Input
        type="text"
        placeholder="Enter OTP"
        value={user.otp}
        height={"35px"}
        onChange={(e) => setUser({...user, otp: e.target.value})}
      />
      <Button
        block={true}
        alignment="center"
        bgColor="#7e8dfa"
        innerText="Login"
        onClick={handleLoginClick}
        marginTop={"24px"}
        disabled={isDisable}
      />

    </div>
  )
}

export default Login
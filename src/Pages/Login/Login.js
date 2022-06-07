import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useDispatch } from 'react-redux';
import { authActions } from './../../Store/auth';

import { Button, Card } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

import styles from './Login.module.css';
import UserPool from './UserPool';
import Validator from '../../Utils/Validators';

function Login(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState({ hasError: false, message: ""});
  const [passwordError, setPasswordError] = useState({ hasError: false, message: ""});

  const isValid = () => {
    const emailErrorData = Validator(email, ["required"]);
    setEmailError(emailErrorData);
    const passwordErrorData = Validator(password, ["required"]);
    setPasswordError(passwordErrorData);
    return (!emailErrorData.hasError && !passwordErrorData.hasError);
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (!isValid()) return;

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        dispatch(authActions.login());
      },
      onFailure: (err) => {
        console.error(err);
      },
      newPasswordRequired: (data) => {
        console.log(data);
      }
    });
  };

  return (
    <Box className={styles.container}>
      <form onSubmit={loginHandler}>
        <Card className={styles.card}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
            color="white"
            sx={{ input: { color: 'white' } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError.hasError}
            helperText={emailError.message}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            color="white"
            sx={{ input: { color: 'white' } }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError.hasError}
            helperText={passwordError.message}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '10px' }}>Login</Button>
        </Card>
      </form>
    </Box>
  );
}

export default Login;
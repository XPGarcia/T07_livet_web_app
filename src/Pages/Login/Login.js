import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

import { Backdrop, Button, Card, CircularProgress } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';

import styles from './Login.module.css';
import Validator from '../../Utils/Validators';
import { login } from '../../Store/auth';
import Alert from '../../Components/Alert/Alert';

function Login(props) {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.sessionReducer.authenticated)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const [emailError, setEmailError] = useState({ hasError: false, message: "" });
  const [passwordError, setPasswordError] = useState({ hasError: false, message: "" });

  /* Login disabled for active session */
  if (isAuthenticated) {
    navigate("/");
  }

  const isValid = () => {
    const emailErrorData = Validator(email, ["required"]);
    setEmailError(emailErrorData);
    const passwordErrorData = Validator(password, ["required"]);
    setPasswordError(passwordErrorData);
    return (!emailErrorData.hasError && !passwordErrorData.hasError);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!isValid()) return;
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      setAlert(false);
      navigate("/");
    } catch(e) {
      setLoading(false);
      setAlert(true);
    }
  };

  return (
    <Box className={styles.container}>
      <form onSubmit={loginHandler} autoComplete="off">
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '10px' }}
          >
            Login
          </Button>
        </Card>
      </form>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={alert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={6000} onClose={() => setAlert(false)}>
        <Alert onClose={() => setAlert(false)} severity="error" sx={{ width: '100%' }}>
          Nombre de usuario o contraseña incorrecta
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Login;
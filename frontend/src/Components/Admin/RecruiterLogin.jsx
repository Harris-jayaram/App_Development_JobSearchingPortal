// src/Components/Admin/RecruiterLogin.js
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Authentication/AuthContext";
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const schema = yup.object({
  email: yup.string().email('Enter a valid email address').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(/[A-Z]/, 'Password must contain an uppercase letter').matches(/[a-z]/, 'Password must contain a lowercase letter').matches(/[0-9]/, 'Password must contain a number').matches(/[\W_]/, 'Password must contain a special character'),
}).required();

const defaultTheme = createTheme();

const users = [
  { email: 'admin1@example.com', password: 'Password1!' },
  { email: 'admin2@example.com', password: 'Password2!' }, { email: 'admin3@example.com', password: 'Password3!' }, { email: 'admin4@example.com', password: 'Password4!' }, { email: 'admin5@example.com', password: 'Password5!' }, { email: 'admin6@example.com', password: 'Password6!' }, { email: 'admin7@example.com', password: 'Password7!' }, { email: 'admin8@example.com', password: 'Password8!' }, { email: 'admin9@example.com', password: 'Password9!' }, { email: 'admin10@example.com', password: 'Password10!' }];

export default function RecruiterLogin() {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      login(email);  // Set the username in AuthContext
      localStorage.setItem('userEmail', email);
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      document.getElementById('email').value = savedEmail;
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 2,
            padding: 4,
            boxShadow: 6
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

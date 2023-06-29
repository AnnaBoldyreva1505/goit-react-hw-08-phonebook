import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
<>
<h2>Log in to the App</h2>
<Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <TextField type="email" name="email" label="Email" sx={{ mb: '20px' }} />

      <TextField
        type="password"
        name="password"
        label="Password"
        sx={{ mb: '20px' }}
      />

      <Button variant="contained" type="submit">Log In</Button>
    </Box>
</>


  );
};

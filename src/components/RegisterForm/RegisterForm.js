import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h2>Create your account</h2>

      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', }}
      >
        <TextField
          label="Username"
          type="text"
          name="name"
          sx={{ mb: '15px'}}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          sx={{ mb: '15px' }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          sx={{ mb: '20px' }}
        />
        <Button variant="contained" type="submit">
          Create account
        </Button>
      </Box>
    </>
  );
};

import { FormEvent } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    onChange,
    formData,
    resetForm,
    email,
    name,
    password1,
    password2,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: "50px",
      }}
    >
      <Card
        style={{
          maxWidth: 450,
          padding: "20px 5px",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Register
          </Typography>
          <form noValidate onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  error={name.trim().length <= 0 && true}
                  helperText={
                    name.trim().length <= 0 && "Este Campo es requerido"
                  }
                  size="small"
                  type="tex"
                  label="Name"
                  placeholder="Name"
                  name="name"
                  value={name}
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  error={!isValidEmail(email) && true}
                  helperText={!isValidEmail(email) && "El correo no es válido"}
                  size="small"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                  error={password1.trim().length <= 5 && true}
                  helperText={
                    password1.trim().length <= 5 && "Contraseña invalida"
                  }
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="password"
                  label="Repeat Password"
                  placeholder="Repeat Password"
                  name="password2"
                  value={password2}
                  variant="outlined"
                  fullWidth
                  onChange={onChange}
                  error={
                    password2.trim().length <= 0 || password1 !== password2
                  }
                  helperText={
                    password2.trim().length <= 0 || password1 !== password2
                      ? "Las contraseñas deben ser iguales"
                      : ""
                  }
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Created
                </Button>
              </Grid>
              <Grid xs={12} item>
                <Button
                  onClick={resetForm}
                  variant="contained"
                  color="info"
                  fullWidth
                >
                  Reset Form
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

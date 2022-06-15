import { useFormik, FormikErrors } from "formik";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
} from "@mui/material";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length >= 16) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length >= 10) {
      errors.lastName = "Must be 10 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

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
            Formik Basic
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                  size="small"
                  type="tex"
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                  size="small"
                  type="text"
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  size="small"
                  type="email"
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
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
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

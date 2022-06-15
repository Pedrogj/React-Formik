import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
} from "@mui/material";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    // Validation with Yup
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      email: Yup.string().email("Email no valid").required("Required"),
    }),
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
            Formik Yup
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="tex"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  {...getFieldProps("firstName")}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="text"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  {...getFieldProps("lastName")}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="email"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  {...getFieldProps("email")}
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

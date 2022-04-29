import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
const LogInForm = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email required!"),
    login: yup
      .string()
      .required("Login required!")
      .min(6, "Login should be at least 6 charachters length")
      .max(20, "Login can not be longer than 20 charachters"),
    password: yup
      .string()
      .required("Password required!")
      .min(6, "Password should be at least 6 charachters length")
      .max(20, "Password can not be longer than 20 charachters"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form action="login" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h2>Log In</h2>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            sx={{ marginBottom: "10px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="login"
            label="Login"
            variant="outlined"
            type="text"
            name="login"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.login}
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ marginBottom: "10px" }}
          />
          <ButtonGroup variant="contained" orientation="vertical">
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ marginTop: "10px" }}
            >
              Sign In!
            </Button>
            <Button
              onClick={() => navigate("/register")}
              type="button"
              variant="contained"
              size="large"
              sx={{ marginTop: "10px" }}
            >
              Create Account
            </Button>
          </ButtonGroup>
        </Box>
      </form>
    </>
  );
};
export default LogInForm;

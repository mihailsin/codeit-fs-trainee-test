import React from "react";
import { useFormik } from "formik";
import { logInSchema } from "../../helpers/validationSchemas";
import { authRequest } from "../../api/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
const LogInForm = ({ authorize }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit: async (values, actions) => {
      if (await authRequest("login", values)) {
        authorize(true);
      }
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

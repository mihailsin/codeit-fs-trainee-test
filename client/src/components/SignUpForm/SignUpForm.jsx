import React from "react";
import { useFormik } from "formik";
import { regisrationSchema } from "../../helpers/validationSchemas";
import { authRequest } from "../../api/authRequests";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ authorize }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      login: "",
      realname: "",
      password: "",
      birthdate: "",
      country: "",
    },
    validationSchema: regisrationSchema,
    onSubmit: async (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values));
      if (await authRequest("register", values)) {
        authorize(true);
      } else {
        console.log("error");
      }
    },
  });
  return (
    <>
      <form action="register" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h2>Register</h2>
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
            id="realname"
            label="Real Name"
            variant="outlined"
            type="text"
            name="realname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.realname}
            error={formik.touched.realname && Boolean(formik.errors.realname)}
            helperText={formik.touched.realname && formik.errors.realname}
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
          <TextField
            id="birthdate"
            label="Date of Birth"
            variant="outlined"
            type="number"
            name="birthdate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.birthdate}
            error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
            helperText={formik.touched.birthdate && formik.errors.birthdate}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            type="text"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.country}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            sx={{ marginBottom: "10px" }}
          />
          <FormControlLabel
            control={<Checkbox id="check" name="agreed" required />}
            label="I agree with terms and conditions"
          />

          <ButtonGroup variant="contained" orientation="vertical">
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ marginTop: "10px" }}
            >
              Sign Up!
            </Button>
            <Button
              onClick={() => navigate("/")}
              type="button"
              variant="contained"
              size="large"
              sx={{ marginTop: "10px" }}
            >
              I have an Account
            </Button>
          </ButtonGroup>
        </Box>
      </form>
    </>
  );
};
export default SignUpForm;

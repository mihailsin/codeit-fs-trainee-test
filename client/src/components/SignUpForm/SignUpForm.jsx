import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { regisrationSchema } from "../../helpers/validationSchemas";
import { authRequest } from "../../api/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getCountriesList } from "../../api/countries";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ authorize }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    getCountriesList().then((data) => setCountries(data));
  }, []);

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
    onSubmit: async (values) => {
      if (await authRequest("register", values)) {
        authorize(true);
      } else {
        authorize(false);
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
            label="Year of Birth"
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
          <FormControl>
            <InputLabel id="country">Country</InputLabel>
            <Select
              sx={{ width: "240px", marginBottom: "10px" }}
              labelId="country"
              id="country"
              required
              defaultValue=""
              label="Country"
              name="country"
              onChange={formik.handleChange}
            >
              {countries?.map((country, idx) => {
                return (
                  <MenuItem
                    key={idx}
                    sx={{ maxWidth: "240px" }}
                    value={country}
                  >
                    {country}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

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

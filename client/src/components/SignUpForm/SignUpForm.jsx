import React from "react";

const SignUpForm = () => {
  return (
    <form action="register">
      <input type="email" name="email" />
      <input type="text" name="login" />
      <input type="text" name="realname" />
      <input type="password" name="password" />
      <input type="number" name="birthdate" />
      <input type="checkbox" value={"i agree with terms and conditions"} />
    </form>
  );
};
export default SignUpForm;

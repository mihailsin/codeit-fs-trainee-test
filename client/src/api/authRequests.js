const authRequest = async (endpoint, body) => {
  try {
    const response = await fetch(`http://localhost:3001/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    const token = result.data.token;
    console.log(token);
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

const validateUserRequest = async () => {
  try {
    const response = await fetch(`http://localhost:3001/dashboard`, {
      method: "GET",
      headers: { token: localStorage.token },
    });
    const data = await response.json();
    const user = data.data.result;
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
  }
};

const validateTokenRequest = async () => {
  if (!localStorage.token) return false;
  try {
    const response = await fetch("http://localhost:3001/auth/verify", {
      method: "GET",
      headers: { token: localStorage.token },
    });
    const tokenIsValid = await response.json();
    console.log(tokenIsValid);
    return tokenIsValid;
  } catch (error) {
    console.error(error);
  }
};

export { authRequest, validateUserRequest, validateTokenRequest };

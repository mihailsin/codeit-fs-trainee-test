const authRequest = async (endpoint, body) => {
  try {
    const response = await fetch(
      `https://code-it-fs-test-msin.herokuapp.com/auth/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    const token = data.data?.token;
    if (token) {
      localStorage.setItem("token", token);
      alert("Successfully logged in!");
      return token;
    } else {
      alert(`Error! ${data}`);
    }
  } catch (error) {
    console.error(error);
  }
};

const validateUserRequest = async () => {
  try {
    const response = await fetch(
      `https://code-it-fs-test-msin.herokuapp.com/dashboard`,
      {
        method: "GET",
        headers: { token: localStorage.token },
      }
    );
    const data = await response.json();
    const user = data.data.result;
    return user;
  } catch (error) {
    console.error(error);
  }
};

const validateTokenRequest = async () => {
  if (!localStorage.token) return false;
  try {
    const response = await fetch(
      `https://code-it-fs-test-msin.herokuapp.com/auth/verify`,
      {
        method: "GET",
        headers: { token: localStorage.token },
      }
    );
    const tokenIsValid = await response.json();
    return tokenIsValid;
  } catch (error) {
    console.error(error);
  }
};

export { authRequest, validateUserRequest, validateTokenRequest };

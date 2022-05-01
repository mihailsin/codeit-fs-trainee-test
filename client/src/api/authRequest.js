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
export default authRequest;

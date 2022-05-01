import { useState, useEffect } from "react";
import { validateUserRequest } from "../../api/authRequests";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
const Dashboard = ({ authorize }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    validateUserRequest().then((data) => {
      setUser(data);
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h2>Dashboard</h2>
      <List>
        <ListItem>name: {user.realname}</ListItem>
        <ListItem>login: {user.login}</ListItem>
        <ListItem>birthdate: {user.birthdate}</ListItem>
        <ListItem>country: {user.country}</ListItem>
        <ListItem>email: {user.email}</ListItem>
        <ListItem>registered: {user.regtimestamp}</ListItem>
      </List>

      <Button
        onClick={() => {
          authorize(false);
          localStorage.removeItem("token");
        }}
        type="button"
        variant="contained"
        size="large"
        sx={{ marginTop: "10px" }}
      >
        Log Out
      </Button>
    </Box>
  );
};
export default Dashboard;

import "./App.css";
import Register from "./Views/Register";
import LogIn from "./Views/LogIn";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

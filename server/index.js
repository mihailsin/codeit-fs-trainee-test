const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/authRoute");

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

app.listen(3001, () => {
  console.log("server is running on 3001");
});

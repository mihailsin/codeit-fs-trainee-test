const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/authRoute");
const dashboardRouter = require("./routes/dashboard");
const countriesRouter = require("./routes/countriesRoute");

app.use(cors());
app.use(express.json());
app.use("/dashboard", dashboardRouter);
app.use("/auth", authRouter);
app.use("/countries", countriesRouter);
app.listen(3001, () => {
  console.log("server is running on 3001");
});

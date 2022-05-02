const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const authRouter = require("./routes/authRoute");
const dashboardRouter = require("./routes/dashboard");
const countriesRouter = require("./routes/countriesRoute");

app.use(cors());
app.use(express.json());
app.use("/dashboard", dashboardRouter);
app.use("/auth", authRouter);
app.use("/countries", countriesRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/client/build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  console.log(path.join(__dirname, "/client/build"));
}
console.log(path.join(__dirname, "/client/build"));
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
const  AuthRouter  = require("./Routes/AuthRouter");
const dotenv = require("dotenv");
dotenv.config();
require("./Models/db");
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", AuthRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

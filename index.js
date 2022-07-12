const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(` The app is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.dir(error);
  });

const express = require("express");

const router = require("./router");

const app = express();

app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port", port, "..");
});

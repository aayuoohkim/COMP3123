const express = require("express");
const router = express.Router();

const hello = (req, res) => {
  res.end("Hello Express JS");
};

const getUser = (req, res) => {
  const user = {
    firstname: req.query.firstname,
    lastname: req.query.lastname,
  };
  res.end(JSON.stringify(user));
};

const postUser = (req, res) => {
  const user = {
    firstname: req.params.firstname,
    lastname: req.params.lastname,
  };
  res.end(JSON.stringify(user));
};

router.get("/hello", hello);
router.get("/user", getUser);
router.post("/user/:firstname/:lastname", postUser);

module.exports = router;

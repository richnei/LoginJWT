const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log("register");
  res.send("register");
});
router.post("/login", (req, res) => {
  console.log("login");
  res.send("login");
});

module.exports = router;

const express = require("express");
const router = express.Router();
const userData = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

      console.log(req.body);
  const existsUser = await userData.findOne({email})

  if(existsUser){
    return res.status(400).json({
        messages:"User already exists"
    })
  }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userData.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "error saving data" });
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await userData.findOne({ email });
    if (!user) {
      return res.json({
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        message: "password wrong",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );
    res.json({
      success: true,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "error saving data" });
  }
});

router.post("/logout", (req, res) => {
  res.json({
    success: true,
    message: "Logged out",
  });
});

module.exports = router;

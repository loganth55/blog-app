const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const routes = require("./routes/data");
const cookieParser = require("cookie-parser");
const categoryRoutes = require("./routes/categoryController");
const commentRoutes = require("./routes/commentController");
const subscriberRoutes = require("./routes/subscriberController");
const settingsRoutes = require("./routes/settingsController");
const authRoutes = require("./routes/authController");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;


//middlewares

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/data", routes);

app.use("/api", categoryRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api", commentRoutes);
app.use("/api", subscriberRoutes);
app.use("/api", settingsRoutes);
app.use("/api/auth", authRoutes);
const protect = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
app.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to profile page",
    user: req.user,
  });
});

app.get("/dashboard", protect, (req, res) => {
  res.json({
    success: true,
    message: "Dashboard Access Granted",
  });
});

//mongodb connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error connecting to db", err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

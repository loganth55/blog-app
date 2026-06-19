const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/data");
const categoryRoutes = require("./routes/categoryController");
const commentRoutes = require("./routes/commentController");
const subscriberRoutes = require("./routes/subscriberController");
const settingsRoutes = require("./routes/settingsController");
const app = express();

const PORT = process.env.PORT || 8000;

//middlewares

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.use("/api/data", routes);

app.use("/api", categoryRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api", commentRoutes);
app.use("/api", subscriberRoutes);
app.use("/api", settingsRoutes);
//mongodb connect
mongoose
  .connect("mongodb+srv://root:root@cluster0.zyqk7k5.mongodb.net/blog")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error connecting to db", err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

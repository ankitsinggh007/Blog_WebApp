// server/index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes (we'll add these later)

app.use("/", routes);
app.get("/posts", (req, res) => {
  console.log("hi");
});
app.get("/posts/:id", (req, res) => {
  /* Get specific post */
});
app.post("/posts", (req, res) => {
  /* Create new post */
});
app.put("/posts/:id", (req, res) => {
  /* Update post */
});
app.delete("/posts/:id", (req, res) => {
  /* Delete post */
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

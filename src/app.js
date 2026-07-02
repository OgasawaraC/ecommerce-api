const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando",
  });
});

module.exports = app;
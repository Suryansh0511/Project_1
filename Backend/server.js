const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const authRoutes = require("./routes/Auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Connect to PostgreSQL
sequelize
  .sync()
  .then(() => console.log("PostgreSQL Connected ✅"))
  .catch((err) => console.log("DB Error ❌", err));

app.listen(5000, () =>
  console.log("Backend running at http://localhost:5000 🚀")
);

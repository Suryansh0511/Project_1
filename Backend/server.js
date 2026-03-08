// ================= IMPORT PACKAGES =================
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ================= DATABASE =================
const sequelize = require("./config/db");

// ================= ROUTES =================
const authRoutes = require("./routes/Auth");
const uploadRoutes = require("./routes/upload");
const profileRoutes = require("./routes/profile");

// ================= CREATE EXPRESS APP =================
const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= STATIC FOLDER FOR FILES =================
app.use("/uploads", express.static("uploads"));

// ================= ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", profileRoutes);

// ================= TEST DATABASE CONNECTION =================
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Connected ✅");

    // Create tables automatically
    await sequelize.sync({ alter: true });

  } catch (error) {
    console.error("DB Connection Error ❌", error);
  }
}

connectDB();

// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT} 🚀`);
});

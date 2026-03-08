const express = require("express");
const router = express.Router();

const auth = require("../middleware/authmiddleware");
const User = require("../models/User");
const Resume = require("../Models/Resume");

// ✅ GET profile
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "email", "age", "mobile", "gender", "dob"]
    });

    const resumes = await Resume.findAll({
      where: { userId: req.user.id }
    });

    res.json({ user, resumes });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ PUT update profile
router.put("/profile", auth, async (req, res) => {
  try {
    const { username, age, mobile, gender, dob } = req.body;

    await User.update(
      { username, age, mobile, gender, dob },
      { where: { id: req.user.id } }
    );

    res.json({ message: "Profile updated successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
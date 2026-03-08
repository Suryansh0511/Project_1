const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middleware/authmiddleware");
const Resume = require("../Models/Resume");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post(
  "/resume",
  authMiddleware,
  upload.single("resume"),
  async (req, res) => {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      await Resume.create({
        filename: file.filename,
        filepath: file.path,
        userId: req.user.id
      });

      res.json({ message: "Resume uploaded successfully" });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Upload failed" });
    }
  }
);

module.exports = router;

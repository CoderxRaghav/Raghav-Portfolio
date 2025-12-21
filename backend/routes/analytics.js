const express = require("express");
const Analytics = require("../models/Analytics");

const router = express.Router();

// page view
router.post("/page-view", async (req, res) => {
  try {
    await Analytics.create({
      type: "page_view",
      page: req.body.page,
    });

    res.status(201).json({ message: "Page view stored" });
  } catch (error) {
    res.status(500).json({ error: "Failed to store page view" });
  }
});

// email click
router.post("/email-click", async (req, res) => {
  try {
    await Analytics.create({
      type: "email_click",
    });

    res.status(201).json({ message: "Email click stored" });
  } catch (error) {
    res.status(500).json({ error: "Failed to store email click" });
  }
});

module.exports = router;

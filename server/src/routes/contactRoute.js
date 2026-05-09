import express from "express";
import { sendContactEmail } from "../models/emailModel.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required.",
    });
  }

  try {
    await sendContactEmail({
      name,
      email,
      phone,
      message,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Brevo error:", error?.response?.body || error.message);

    return res.status(500).json({
      error: "Failed to send email. Please try again.",
    });
  }
});

export default router;

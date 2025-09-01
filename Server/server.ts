import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(bodyParser.json());

// Nodemailer transport using SendGrid
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587, // or 465 for secure
  secure: false, // true if port 465
  auth: {
    user: "apikey", // literal string "apikey"
    pass: process.env.SENDGRID_API_KEY,
  },
});

console.log(process.env.SENDGRID_API_KEY); // should log the actual key
console.log(process.env.EMAIL_FROM);

app.post("/send-email", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact Form: ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      html: `<h3>From: ${name} (${email})</h3><p>${message}</p>`,
      replyTo: email, // allows you to reply to the user
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("SendGrid error:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

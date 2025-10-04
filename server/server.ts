import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors({
  origin: ["https://rajakumaran-dev.vercel.app","http://localhost:5173"]
}));
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GAMIL_APP_PASS,
  },
});

// Test route
app.get("/", (_req: Request, res: Response) => {
  res.send("Email server is running!");
});

// Send email route
app.post("/send-mail", (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const mailOptions = {
    from: process.env.GMAIL_ID,     // your Gmail
    to: process.env.GMAIL_ID,       // send all messages to yourself
    subject: `New message from ${name} (${email})`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Email not sent", error });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

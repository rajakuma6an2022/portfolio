import express from "express";
import type { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    // Configure SMTP (your server or domain email)
    const transporter = nodemailer.createTransport({
      host: "mail.yourdomain.com", // Replace with your SMTP server
      port: 465,
      secure: true,
      auth: {
        user: "contact@yourdomain.com",
        pass: "yourpassword", // Better: use ENV variable
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <contact@yourdomain.com>`,
      to: "yourpersonal@gmail.com",
      subject: "New Portfolio Contact Form Submission",
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
      html: `<h3>From: ${name} (${email})</h3><p>${message}</p>`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

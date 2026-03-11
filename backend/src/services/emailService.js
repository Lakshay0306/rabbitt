import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async (recipient, summary) => {

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: "AI Generated Sales Insight",
    text: summary
  };

  await transporter.sendMail(mailOptions);

};
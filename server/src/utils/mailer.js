const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

exports.sendingMail = async ({ from, to, subject, text }) => {
  try {
    let mailOptions = {
      from,
      to,
      subject,
      text,
    };

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.TRANSPORTER_USER,
        pass: process.env.TRANSPORTER_PASS,
      },
    });

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error.message);
  }
};

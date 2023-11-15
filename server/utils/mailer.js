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
        user: "alexandrea77@ethereal.email",
        pass: "ag6rjW2ZqcuznWCjr7",
      },
    });

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error.message);
  }
};

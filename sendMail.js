const nodemailer = require('nodemailer');
let transporter;
function mailConfg(config) {
  transporter = nodemailer.createTransport({
    tls: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: config.user,
      pass: config.pass
    },
  });
}
async function sendMail(from, to, subject, template) {
  try {
    const mailOptions = {
      from,
      to:to.join(','),
      subject,
      html: template,
    };
    const info = await transporter.sendMail(mailOptions);
    return `Email sent successfully. Message ID: ${info.messageId}`;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}
module.exports = { sendMail, mailConfg };

const nodemailer = require('nodemailer');
let transporter;
/// @ts-ignore mailConfig method takes a config object and creates a new transporter instance.
/**
 * @ts-ignore mailConfig method takes a config object and creates a new transporter instance.
 * This is a description of your function.
 *
 * @param {Object} data - An object containing mail configuration.
 * @param {string} data.host - The SMTP host (e.g., "smtp.gmail.com").
 * @param {number} data.port - The port number (e.g., 465).
 * @param {string} data.user - The username for authentication.
 * @param {string} data.pass - The password for authentication.
 * @param {boolean} [data.tls=false] - Whether to use TLS (optional, defaults to false).
 * @throws {Error} Will throw an error if the input data is invalid.
 * @returns {void}
 */
function mailConfg(data) {
    // Input validation
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data: Please provide an object containing mail configuration.');
    }
  
    if (!data.host || typeof data.host !== 'string') {
      throw new Error('Invalid host: Please provide a valid SMTP host.');
    }
  
    if (!data.port || typeof data.port !== 'number') {
      throw new Error('Invalid port: Please provide a valid port number.');
    }
  
    if (!data.user || typeof data.user !== 'string') {
      throw new Error('Invalid user: Please provide a valid username.');
    }
  
    if (!data.pass || typeof data.pass !== 'string') {
      throw new Error('Invalid pass: Please provide a valid password.');
    }
  
    // If tls is provided, make sure it's a boolean
    if (data.tls !== undefined && typeof data.tls !== 'boolean') {
      throw new Error('Invalid tls: Please provide a valid boolean value for tls.');
    }
  transporter = nodemailer.createTransport({
    tls: data.tls?data.tls:false,
    host:data.host, //"smtp.gmail.com"
    port: data.port,  //465
    secure: true,
    auth: {
      user: data.user,
      pass: data.pass
    },
  });
}
/**
 * Sends an email using Nodemailer.
 *
 * @async
 * @param {string} from - The sender's email address.
 * @param {string[]} to - An array of recipient email addresses.
 * @param {string} subject - The subject of the email.
 * @param {string} template - The HTML content of the email.
 * @throws {Error} Will throw an error if any of the parameters are invalid or if there's an issue sending the email.
 * @returns {Promise<string>} A promise that resolves to a success message with the email message ID if the email is sent successfully.
 */
async function sendMail(from, to, subject, template) {
  try {
    if (typeof from !== 'string' || !isValidEmail(from)) {
      throw new Error('Invalid sender email address.');
    }
  
    if (!Array.isArray(to) || to.length === 0 || !to.every(isValidEmail)) {
      throw new Error('Invalid recipient email addresses.');
    }
  
    if (typeof subject !== 'string' || subject.trim() === '') {
      throw new Error('Invalid email subject.');
    }
  
    if (typeof template !== 'string' || template.trim() === '') {
      throw new Error('Invalid email template.');
    }
  
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
/**
 * Validates an email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
module.exports = { sendMail, mailConfg };

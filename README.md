# MailSender Email Sender #
This is a custome module that provides a simple way to send emails using Nodemailer. It allows you to configure the SMTP server and credentials, and then send emails with ease.

Installation
To use this module, make sure you have Node.js installed on your system. Then, follow these steps:

Clone or download this repository to your project folder.
Install the required dependencies by running the following command:

npm  install mailsender-1.2.1.tgz 

const { sendMail, mailConfg } = require('./path/to/mailsender');


Configure the email transporter with your email credentials:

// Call this function before sending any emails
mailConfg({
  user: 'your_email@gmail.com',
  pass: 'your_email_password',
  host:'your_smtp_host',
  port:'your_smtp_port'
});

Send an email using the sendMail function:

const from = 'your_email@gmail.com';
const to = ['recipient1@example.com', 'recipient2@example.com'];
const subject = 'Email Subject';
const template = '<p>This is the email content.</p>';

sendMail(from, to, subject, template)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error.message);
  });


**Note**: Ensure that you allow "Less Secure Apps" on your Gmail account if you are using Gmail as your SMTP server. For production use, consider using an application-specific password instead.

API Reference
mailConfg(config)
This function sets up the email transporter with the provided configuration.

config: An object containing the email credentials.
user: Your email address (e.g., 'your_email@gmail.com').
pass: Your email password or application-specific password.
sendMail(from, to, subject, template)
This function sends an email to the specified recipients.

from: The email address of the sender.
to: An array of email addresses of the recipients.
subject: The subject of the email.
template: The HTML content of the email.
Returns a promise that resolves to a success message containing the sent email's message ID or rejects with an error if the email sending process fails.

**License**
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
This module utilizes the Nodemailer library to facilitate email sending. Nodemailer is a wonderful tool for email communication in Node.js applications.

For more information about Nodemailer, visit their website.

Replace path/to/emailSender in the import statement with the actual path to the emailSender.js file in your project.

Please ensure to replace your_email@gmail.com and your_email_password in the examples with your actual Gmail account and password or application-specific password.

Additionally, you may customize the email content template to suit your specific use case. This template supports HTML, so you can format the email as needed.

Remember to include any additional setup instructions or configuration details that are specific to your application or use case

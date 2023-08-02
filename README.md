# triggeremailfast

![Version](https://img.shields.io/npm/v/triggeremailfast.svg)
![License](https://img.shields.io/npm/l/triggeremailfast.svg)

A simple and fast Node.js package to send emails using Nodemailer.

## Installation

```bash
npm install triggeremailfast
```

## Usage

### mailConfg

This function is used to configure the email transporter with the necessary settings.

```js
const { mailConfg } = require('triggeremailfast');

const mailConfigData = {
  host: 'your-smtp-host',
  port: 465,
  user: 'your-email@example.com',
  pass: 'your-email-password',
  tls: true // optional: default is false
};

mailConfg(mailConfigData);
```

### sendMail

This function is used to send an email using the configured transporter.

```js
const { sendMail } = require('triggeremailfast');

// Sample usage
(async () => {
  try {
    const from = 'sender@example.com';
    const to = ['recipient1@example.com', 'recipient2@example.com'];
    const subject = 'Test Email';
    const template = '<h1>Hello, this is a test email!</h1>';

    const result = await sendMail(from, to, subject, template);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();
```

### Notes

- The `mailConfg` function needs to be called once with valid configuration before using the `sendMail` function.
- The `sendMail` function requires valid email addresses for both sender and recipients.
- The package uses Nodemailer under the hood, and it supports TLS.

## API

### mailConfg(data)

This function takes a configuration object as input and sets up the email transporter.

- `data` (Object) - An object containing mail configuration.
  - `host` (string) - The SMTP host (e.g., "smtp.gmail.com").
  - `port` (number) - The port number (e.g., 465).
  - `user` (string) - The username for authentication.
  - `pass` (string) - The password for authentication.
  - `tls` (boolean) - Whether to use TLS (optional, defaults to false).

### sendMail(from, to, subject, template)

This function sends an email using the configured transporter.

- `from` (string) - The sender's email address.
- `to` (string[]) - An array of recipient email addresses.
- `subject` (string) - The subject of the email.
- `template` (string) - The HTML content of the email.

Returns a Promise that resolves to a success message with the email message ID if the email is sent successfully.

## License

This project is licensed under the [ISC License](LICENSE).

---

Please note that you can customize the package name, version, author, and description in the `package.json` file based on your preferences. If you have any further questions or need additional customization, feel free to ask!
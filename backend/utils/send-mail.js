const nodemailer = require('nodemailer');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.name = user.name;
    this.url = url;
    this.from = `E-learning platform <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      // host: process.env.EMAIL_HOST,
      // port: process.env.EMAIL_PORT,
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(html, subject, text) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text,
      html,
    };

    await this.newTransport().sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent' + info.response);
      }
    });
  }

  async sendPasswordReset() {
    const html = `<p>You are receiving this email because you (or someone else) has requested to reset the password for your account.</p>
                  <p>Please click on the following link, or paste this into your browser to complete the process:</p>
                  <p><a href="${this.url}">${this.url}</a></p>
                  <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
                  <p>Valid for only 10 minutes</p>`;
    const subject = 'Reset your password';
    const text = `You are receiving this email because you (or someone else) has requested to reset the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                ${this.url}\n\n
                If you did not request this, please ignore this email and your password will remain unchanged.\n\n
                Valid for only 10 minutes`;

    await this.send(html, subject, text);
  }
};

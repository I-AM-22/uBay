import { settings } from '@config/settings';
import { htmlToText } from 'html-to-text';
import nodemailer from 'nodemailer';
import pug from 'pug';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const { MAILER } = settings;
class Email {
  firstName: any;
  url: string;
  to: any;
  from: string;
  constructor(user: any, url: string) {
    this.url = url;
    this.firstName = user.name.split(' ')[0];
    this.to = user.email;
    this.from = `${MAILER.FROM_NAME} <${MAILER.FROM_ADDRESS}>`;
  }

  newTransporter() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USERNAME_R,
          pass: process.env.EMAIL_PASSWORD_R,
        },
      });
    }

    return nodemailer.createTransport({
      host: MAILER.HOST,
      port: MAILER.PORT,
      auth: {
        user: MAILER.USERNAME,
        pass: MAILER.PASSWORD,
      },
    } as SMTPTransport.Options);
  }

  async send(template: string, subject: string) {
    //1) Render html based on pug template
    const html = pug.renderFile(
      `${__dirname}/../public/email/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    //2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: htmlToText(html),
      html,
    };

    //3) Send the email
    await this.newTransporter().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Nazif family');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your reset token valid for only 10 minute'
    );
  }

  async sendResetMessage() {
    await this.send('passwordChanged', 'Your password has been reset');
  }
}

export default Email;

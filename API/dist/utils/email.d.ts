import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
declare class Email {
    firstName: any;
    url: string;
    to: any;
    from: string;
    constructor(user: any, url: string);
    newTransporter(): nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
    send(template: string, subject: string): Promise<void>;
    sendWelcome(): Promise<void>;
    sendPasswordReset(): Promise<void>;
    sendResetMessage(): Promise<void>;
}
export default Email;

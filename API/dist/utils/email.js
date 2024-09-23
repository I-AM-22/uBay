"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("@config/settings");
const html_to_text_1 = require("html-to-text");
const nodemailer_1 = require("nodemailer");
const pug_1 = require("pug");
const { MAILER } = settings_1.settings;
class Email {
    constructor(user, url) {
        this.url = url;
        this.firstName = user.name.split(' ')[0];
        this.to = user.email;
        this.from = `${MAILER.FROM_NAME} <${MAILER.FROM_ADDRESS}>`;
    }
    newTransporter() {
        if (process.env.NODE_ENV === 'production') {
            return nodemailer_1.default.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USERNAME_R,
                    pass: process.env.EMAIL_PASSWORD_R,
                },
            });
        }
        return nodemailer_1.default.createTransport({
            host: MAILER.HOST,
            port: MAILER.PORT,
            auth: {
                user: MAILER.USERNAME,
                pass: MAILER.PASSWORD,
            },
        });
    }
    send(template, subject) {
        return __awaiter(this, void 0, void 0, function* () {
            const html = pug_1.default.renderFile(`${__dirname}/../public/email/${template}.pug`, {
                firstName: this.firstName,
                url: this.url,
                subject,
            });
            const mailOptions = {
                from: this.from,
                to: this.to,
                subject,
                text: (0, html_to_text_1.htmlToText)(html),
                html,
            };
            yield this.newTransporter().sendMail(mailOptions);
        });
    }
    sendWelcome() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('welcome', 'Welcome to the Nazif family');
        });
    }
    sendPasswordReset() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('passwordReset', 'Your reset token valid for only 10 minute');
        });
    }
    sendResetMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send('passwordChanged', 'Your password has been reset');
        });
    }
}
exports.default = Email;
//# sourceMappingURL=email.js.map
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailTrapMailProvider implements IMailProvider{
    private transport: Mail;

    constructor() {
        this.transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '24bd1bed5b6849',
                pass: 'c3b872d01f2502'
            }
        })
    }

    async senMail(message: IMessage): Promise<void> {
        await this.transport.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body,
        })
    }
}
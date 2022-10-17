const nodemailer = require('nodemailer')

class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationmail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Активация аккаунта на " + process.env.API_URL, 
            text:
            `
            <div>
            <h1>Для активации перейдите по ссылке</h1>
            <a href="${link}">${link}</a>
            <list-unsubscribe href="">От</list-unsubscribe>
            </div>
        `
            
        })
    }
}

module.exports = new MailService();
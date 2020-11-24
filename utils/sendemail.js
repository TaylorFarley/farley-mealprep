const sgMail = require('@sendgrid/mail');

const api=process.env.API
sgMail.setApiKey(api);



module.exports = {
    sgMail
}
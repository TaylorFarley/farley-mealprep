const sgMail = require('@sendgrid/mail');

const api=process.env.API
sgMail.setApiKey(api);
const msg = {
    to: 'twfarley88@gmail.com',
    from: 'twfarley88@gmail.com',
    subject: 'newKey',
    text: 'message',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg); 


module.exports = {
    sgMail
}
const functions = require('firebase-functions');
const config = require('./config');
const sendgrid = require('sendgrid');
const client = sendgrid(config.SENDMAIL_API_KEY);
const fromEmailStr = config.FROM_EMAIL;
const toEmailStr = config.TO_EMAIL;

function parseBody(body, fromEmailStr, toEmailStr) {
    var helper = sendgrid.mail;
    var fromEmail = new helper.Email(fromEmailStr);
    var toEmail = new helper.Email(toEmailStr);
    var subject = body.subject;
    var content = new helper.Content('text/html', body.content);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    return mail.toJSON();
}

exports.httpEmail = functions.https.onRequest((req, res) => {
    return Promise.resolve()
    .then(()=> {
        if (req.method !== 'POST') {
            const error = new Error('Only POST requests are accepted');
            error.code = 405;
            throw error;
        }

        const request = client.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: parseBody(req.body, fromEmailStr, toEmailStr)
        });

        return client.API(request);
    })
    .then((response) => {
        if (response.body) {
            res.send(response.body);
        } else {
            res.end();
        }
    })

    .catch((err) => {
        console.error(err);
        return Promise.reject(err);
    })

});
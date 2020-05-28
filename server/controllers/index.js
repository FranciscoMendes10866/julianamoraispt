const request = require('request')
const sgMail = require('@sendgrid/mail')
controller = {}



//sendGrid api
controller.sendEmail = (req, res) => {
    //SendGrid API KEY
    sgMail.setApiKey('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')
    //console.log(sgMail)
    // console.log(req.body)
    const msg = {
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html
    }
    sgMail.send(msg)
}



//mailchimp API
controller.Newsletter = (req, res) => {
    //Form Data
    const data = {
        members: [
            {
                email_address: req.body.email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: req.body.firstName,
                    LNAME: req.body.lastName
                }
            }
        ]
    }
    //Convert Data to a string
    const postData = JSON.stringify(data);
    //All data to send
    const options = {
        url: 'https://us19.api.mailchimp.com/3.0/lists/f0842d719c',
        method: 'POST',
        headers: {
            Authorization: 'auth 5b151dbaf75eb4cc1ea7e4f572d80257-us19'
        },
        body: postData
    }
    //Debug
    //console.log(options)
    //Send data
    request(options, (err, response, body) => {
        if (err) {
            console.log(err)
        } else {
            if (response.statusCode === 200) {
                console.log('OK')
            } else {
                console.log('Got an error')
            }
        }
    })
}





module.exports = controller
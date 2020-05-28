const express = require('express')
const router = express.Router()


//controllers
const controllers = require('../controllers/index')


//policy - middleware
const policy = require('../policy/index')


//Mailchimp
router.post('/mailchimp', policy.Newsletter, controllers.Newsletter)


//Form API
router.post('/mail', policy.sendEmail, controllers.sendEmail)




module.exports = router
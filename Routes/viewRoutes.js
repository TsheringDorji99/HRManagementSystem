const express = require('express')
const router = express.Router()

const viewsController = require('./../Controller/viewControllers')
const authController = require('./../Controller/authControllers')


router.get('/registeration', viewsController.getHome)
router.get('/', viewsController.getLoginForm)
module.exports = router
const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect); // All the routes(middlewares) after this middleware are protected

router.get('/checkout-session/:tourId', bookingController.getCheckoutSession);

module.exports = router;

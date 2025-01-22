const express = require('express');
const authController = require('../controllers/authController.js');
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);

module.exports = router;
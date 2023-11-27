const express = require('express');

const { signup, login, debug } = require('../controllers/auth.js');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/debug', debug);

module.exports = router;
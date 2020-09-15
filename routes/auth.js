const express = require('express');
const controller = require('../controllers/auth');
const router = express.Router();
const passport = require('passport');

require('../middleware/passport')(passport);
router.post('/login', controller.login);
router.post('/reg', controller.register);
module.exports = router;
const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/login', siteController.login);
router.use('/register', siteController.register);
router.use('/', siteController.index);

module.exports = router;

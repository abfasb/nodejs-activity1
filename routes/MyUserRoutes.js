const express = require('express');
const MyUserController = require('../controllers/MyUserController');
const router = express.Router();

router.get('/', MyUserController.home);
router.get('/about', MyUserController.about);
router.get('/contact', MyUserController.contact);
router.get('/services', MyUserController.services);
router.get('/login', MyUserController.login);

module.exports = router;
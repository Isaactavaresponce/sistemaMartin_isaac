const express = require('express');
const LoginController = require('../controllers/LoginController');
const adminController = require('../controllers/adminController.js');

const router = express.Router();

///Son las redirecciones para que funcione el sistema

router.get('/login', LoginController.index);
router.get('/acerca', LoginController.acerca);
router.post('/registra', LoginController.storeUser);
router.post('/entrar', LoginController.auth);
router.get('/logout', LoginController.logout);


router.get('/personal', adminController.tabla);

module.exports = router;
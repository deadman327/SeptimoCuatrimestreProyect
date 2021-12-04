
const { Router } = require('express')
const router = Router();

const { createUser, loginUser, singinUser, signup, logout} = require('../controllers/users.controller');

// Login FORM
router.get('/user/login', loginUser);

router.post('/user/login', singinUser);

// Registrarse
router.get('/user/singup', signup);
//router.post('/user/singup', signup );
router.post('/user/singup', createUser );

// Cerrar
router.get('/user/logout', logout);



module.exports = router;
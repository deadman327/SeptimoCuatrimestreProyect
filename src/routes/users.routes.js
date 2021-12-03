
const { Router } = require('express')
const router = Router();

const { createUser, loginUser, singinUser, signup, logout} = require('../controllers/users.controller');

// Login
router.get('/user/login', loginUser);
router.post('/user/login', singinUser);

// singup
router.get('/user/singup', singinUser);
//router.post('/user/singup', signup );

 router.post('/user/singup', createUser );



module.exports = router;
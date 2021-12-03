
const { Router } = require('express')
const router = Router();

const { createUser, loginUser, singinUser } = require('../controllers/users.controller');

// Login
router.get('/user/login', loginUser);

// singup
router.get('/user/singup', singinUser);
router.post('/user/singup', createUser );

module.exports = router;
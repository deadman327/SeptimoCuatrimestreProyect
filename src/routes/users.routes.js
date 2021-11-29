const { Router } = require('express')
const router = Router();

const { createUser } = require('../controllers/users.controller');


router.post('/user/singup', createUser );

module.exports = router;
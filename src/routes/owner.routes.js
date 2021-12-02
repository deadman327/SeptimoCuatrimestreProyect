const router = require("express").Router()

const { createNewOwner, renderOwnerForm } = require('../controllers/owner.controller');

router.post('/owners', createNewOwner)

// GET api
router.get("/owners", renderOwnerForm)

module.exports = router
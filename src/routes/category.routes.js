const { Router } = require('express')
const router = Router();

const { createNewCategory, renderCategories } = require('../controllers/category.controller');


router.get('/categories/add', renderCategories );

router.post('/categories/add', createNewCategory );

module.exports = router;
const { Router } = require('express');
const { getTypes } = require('../controllers/typeController');

const router = Router();

router.get('/', getTypes);

module.exports = router;
const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.get('/edit/:id', courseController.edit);
router.put('/update/:id', courseController.update);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;

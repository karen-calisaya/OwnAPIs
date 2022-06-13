const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesControllerApi');

router.get('/api/movies', moviesController.list);
router.get('/api/movies/:id', moviesController.detail);

module.exports = router;

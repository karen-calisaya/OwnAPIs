const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesControllerApi');
const moviesValidator = require('../../validator/movieValidator');
router.get('/api/movies', moviesController.list);
router.get('/api/movies/:id', moviesController.detail);
router.post('/api/movies', moviesValidator, moviesController.create);
router.delete('/api/movies/:id', moviesController.destroy);

module.exports = router;

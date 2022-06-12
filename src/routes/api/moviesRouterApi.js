const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesControllerApi');

router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);

module.exports = router;

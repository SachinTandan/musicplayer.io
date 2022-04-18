const express = require('express');
const musicController = require('../controllers/musicControllers');

const router = express.Router();

router.get('/', musicController.getMusics);

router.get('/:musicId', musicController.getMusicById);

router.post('/', musicController.save);

router.put('/:musicId', musicController.update);

router.delete('/:musicId', musicController.deleteById);

module.exports = router;
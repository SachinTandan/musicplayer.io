const userController= require('../controllers/userController')
const express= require('express');
const router = express.Router();
router.post('/',userController.getUser);
router.get('/:sessionId',userController.getPlaylist);
router.post('/enqueueSong',userController.getEnque);
router.post('/dequeueSong',userController.getDnque);
// router.get('/:title',userController)
module.exports =router;
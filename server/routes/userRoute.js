const userController= require('../controllers/userController')
const express= require('express');
const router = express.Router();
router.post('/',userController.getUser);
router.get('/',userController.getPlaylist);

module.exports =router;
const userRouter= require('../controllers/userController')
const express= require('express');
const router = express.Router();
router.post('/',userRouter.getUser);

module.exports =router;
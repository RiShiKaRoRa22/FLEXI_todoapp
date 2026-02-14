const express= require('express');
const UserController= require('../controllers/controller')
const router= express.Router();
router.get('/', UserController.findAll);
router.post('/', UserController.create);
router.put('/:email',UserController.updatebyEmail);
router.delete('/:email', UserController.deleteByEmail);
module.exports=router;
const express = require('express');
const userController = require('../controllers/userController.js');
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');

const router = express.Router();

router.get('/', jwtMiddleware, userController.getAllUsers);
router.get('/:id', jwtMiddleware, userController.getUserById);
router.post('/', jwtMiddleware, userController.createUser);
router.put('/:id', jwtMiddleware, userController.updateUser);
router.delete('/:id', jwtMiddleware, userController.deleteUser);

module.exports = router;
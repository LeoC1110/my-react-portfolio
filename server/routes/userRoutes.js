/* userRoutes.js, Ligeng Cai, 301286463, 10/13/2024 */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);            // GET all users
router.get('/:id', userController.getUserById);         // GET a user by ID
router.post('/', userController.addUser);               // POST a new user
router.put('/:id', userController.updateUser);          // PUT to update a user by ID
router.delete('/:id', userController.deleteUser);       // DELETE a user by ID

module.exports = router;

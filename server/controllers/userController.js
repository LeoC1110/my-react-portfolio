/*userController.js, Ligeng Cai, 301286463, 10/13/2024*/
const User = require('../models/User');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

// Add a new user
exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

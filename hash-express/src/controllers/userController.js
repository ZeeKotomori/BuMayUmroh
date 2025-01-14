const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).send({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(400).send({
            status: 'fail',
            message: err.message
        });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!user) {
            return res.status(404).send({
                status: 'fail',
                message: 'User not found'
            });
        }
        res.status(200).send({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        res.status(400).send({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const newUser = await prisma.user.create({
            data: req.body
        });
        res.status(201).send({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (err) {
        res.status(400).send({
            status: 'fail',
            message: err.message
        });
    }
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        res.status(200).send({
            status: 'success',
            data: {
                user: updatedUser
            }
        });
    } catch (err) {
        res.status(400).send({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        await prisma.user.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(204).send({
            msg : "data has been deleted"
        });
    } catch (err) {
        res.status(400).send({
            status: 'fail',
            message: err.message
        });
    }
};
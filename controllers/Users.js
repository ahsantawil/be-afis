import User from '../models/UsersModel.js';
import argon2 from 'argon2';

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll({
            attributes: ['id', 'username', 'position', 'role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            attributes: ['id', 'username', 'position', 'role'],
            where: {
                id: req.params.id
            }
       });
       res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const addUsers = async (req, res) => {
    const { username, password, position, role } = req.body;
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            username: username,
            password: hashPassword,
            position: position,
            role: role
        });
        res.status(201).json({msg: 'Register Berhasil'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};

export const updateUsers = async ( req, res ) => {
    const user = await User.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: 'User Tidak ditemukan'});
    const { username, password, position, role } = req.body;
    let hashPassword;
    if (password === '' || password === null) {
        hashPassword = user.password;
    } else {
        hashPassword = await argon2.hash(password);
    }

    try {
        await User.update({
            username: username,
            password: hashPassword,
            position: position,
            role: role
        }, {
            where: {
                id: user.id
            }
        });
        res.status(200).json({ msg: 'User Updated'});
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
};

export const deleteUsers = async (req, res) => {
    const user = await User.findOne({
        where: {
            id : req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: 'User Tidak ditemukan'});

    try {
        await User.destroy({
            where: {
                id : user.id
            }
        });
        res.status(200).json({msg: 'User Deleted'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
};
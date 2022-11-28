import express from 'express';
import { addUsers, deleteUsers, getUserById, getUsers, updateUsers } from '../controllers/Users.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', addUsers);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

export default router;
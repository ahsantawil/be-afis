import express from 'express';
import { addArea, deleteArea, getArea, getAreaById, updateArea } from '../controllers/Area.js';

const route = express.Router();

route.get('/area', getArea);
route.get('/area/:id', getAreaById);
route.post('/area', addArea);
route.put('/area/:id', updateArea);
route.delete('/area/:id', deleteArea);


export default route;
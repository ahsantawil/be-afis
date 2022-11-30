import express from 'express';
import { addUiw, deleteUiw, getUiw, getUiwById, updateUiw } from '../controllers/Uiw.js';

const route = express.Router();

route.get('/uiw', getUiw);
route.get('/uiw/:id', getUiwById);
route.post('/uiw', addUiw);
route.put('/uiw/:id', updateUiw);
route.delete('/uiw/:id', deleteUiw);

export default route;
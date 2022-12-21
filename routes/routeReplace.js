import express from 'express';
import { getReplace } from '../controllers/Replacement.js';

const route = express.Router();

route.get('/replace', getReplace);


export default route;
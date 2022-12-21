import express from 'express';
import { getClaim } from '../controllers/Claim.js';

const route = express.Router();

route.get('/claim', getClaim);

export default route;
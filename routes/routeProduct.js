import express from 'express';
import { getProduct, getProductById } from '../controllers/Product.js';

const route = express.Router();

route.get('/product', getProduct);
route.get('/product/:id', getProductById);


export default route;
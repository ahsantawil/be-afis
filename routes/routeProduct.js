import express from 'express';
import { addProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controllers/Product.js';

const route = express.Router();

route.get('/product', getProduct);
route.get('/product/:id', getProductById);
route.post('/product', addProduct);
route.put('/product/:id', updateProduct);
route.delete('/product/:id', deleteProduct);


export default route;
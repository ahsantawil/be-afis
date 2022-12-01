import express from "express";
import { getDelivery } from "../controllers/Delivery.js";

const route = express.Router();

route.get('/delivery', getDelivery);

export default route;
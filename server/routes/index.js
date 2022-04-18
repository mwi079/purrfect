import Router from "koa-router";
import {allOrders} from '../controllers/orders.controllers.js'
const router=new Router();

router.get("/", allOrders);

export default router;
import Koa from "koa";
import cors from "koa-cors";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import json from "koa-json";
import dotenv from 'dotenv';
dotenv.config()


const app = new Koa();
import  router  from "./routes/index.js";


app.use(json());
app.use(logger());
app.use(cors()).use(bodyparser()).use(router.routes());



export default app.listen(process.env.PORT,()=>{console.log(`running on port ${process.env.PORT}`)})
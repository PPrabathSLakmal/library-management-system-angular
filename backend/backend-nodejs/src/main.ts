import express, {json} from 'express';
import cors from 'cors';
import {router as bookController} from "./api/book-controller";
import {router1 as serviceController} from "./api/service-controller"

const app = express();
app.use(json());
app.use(cors());
app.use('/app/api/v1/books',bookController);
app.use('/app/api/v1/services',serviceController);


app.listen(8080,()=>console.log("Server has been successfully open from port 8080"))




import express, {json} from 'express';
import cors from 'cors';
import {router as bookController} from "./api/book-controller";

const app = express();
app.use(json());
app.use(cors());
app.use('/app/api/v1',bookController);


app.listen(8080,()=>console.log("Server has been successfully open from port 8080"))




import express from 'express';
import { pingHanlder } from '../controllers/ping.controller';


const pingRouter = express.Router();

pingRouter.get('/ping', pingHanlder);

export default pingRouter;
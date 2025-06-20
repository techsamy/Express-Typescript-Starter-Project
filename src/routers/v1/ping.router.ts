import express from 'express';
import { pingHanlder } from '../../controllers/ping.controller';


const pingRouter = express.Router();

pingRouter.get('/', pingHanlder);

pingRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok Healthy' });
});

pingRouter.get('/status', (req, res) => {
    res.status(200).json({ status: 'running' });
});
export default pingRouter;
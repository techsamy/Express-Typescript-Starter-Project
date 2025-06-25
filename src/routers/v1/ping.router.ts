import express from 'express';
import { pingHanlder } from '../../controllers/ping.controller';
import { validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';


const pingRouter = express.Router();

/* function checkBody(req: express.Request, res: express.Response, next: express.NextFunction) :void {
    if (typeof req.body.name !== 'string') {
        res.status(400).send('Name must be a string');
    }
    next();
}
 */
// pingRouter.get('/', checkBody, pingHanlder);

pingRouter.get('/', validateRequestBody(pingSchema), pingHanlder);

pingRouter.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok Healthy' });
});

pingRouter.get('/status', (req, res) => {
    res.status(200).json({ status: 'running' });
});
export default pingRouter;
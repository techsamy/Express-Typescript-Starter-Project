import { Express } from 'express';
import { pingHanlder } from '../controllers/ping.controller';

export function createPingRouter(app: Express){
    app.get('/ping', pingHanlder);
}
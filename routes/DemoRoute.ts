import express from 'express';
import { DemoController } from '../controllers/DemoController';

export class DemoRoutes{
    app = express();
    demoController = new DemoController();

    get routes(){

        this.app.use('/checkConnection', this.demoController.checkConnection);

        return this.app;
    }
}
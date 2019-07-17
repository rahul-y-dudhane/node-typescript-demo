import express from 'express';
import { DemoController } from '../controllers/DemoController';

export class DemoRoutes{
    app = express();
    demoController = new DemoController();

    get routes(){

        this.app.get('/', this.demoController.renderIndex)
        this.app.get('/checkConnection', this.demoController.checkConnection);

        return this.app;
    }
}
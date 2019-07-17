import express from 'express';
import { DemoRoutes } from './routes/DemoRoute';

const app = express();
const port = 3770;

app.use(new DemoRoutes().routes)
app.listen(port, () => {
    console.log('Application is started at post :',port);
});

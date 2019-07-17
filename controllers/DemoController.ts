import express from 'express';

export class DemoController{

    public checkConnection(req: express.Request, res: express.Response){
        const status = 'live';

        res.send(`<h1 style="
        width: 100%;
        text-align: center;">Connection is
          <span style="color: green"><i>${status}</i></span></h1>`);
    }
}
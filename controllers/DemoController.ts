import express from 'express';

export class DemoController{

    renderIndex(req: express.Request, res: express.Response) {
        res.sendFile(`${__dirname}/index.html`)
    }

    public checkConnection(req: express.Request, res: express.Response){
        const status = 'live';
        // res.writeHead(200, {"Content-Type": "text/html"});  
        // res.write(`<h1 style="
        // width: 100%;
        //  text-align: center;">Connection is
        // <span style="color: green"><i>${status}</i></span></h1>`);  
        // res.end(); 

        res.send(`<h1 style="
        width: 100%;
        text-align: center;">Connection is
          <span style="color: green"><i>${status}</i></span></h1>`);
    }
}
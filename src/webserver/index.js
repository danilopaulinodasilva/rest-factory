import express from 'express';
import cors from 'cors';
import routes from '../routes/index.js';

function createWebserver() {

    function start() {
        console.log(`> [webserver] Starting...`);

        console.log(`> [webserver] Loading express()...`);
        const server = express();

        console.log(`> [webserver] Loading cors()...`);
        server.use(cors());

        console.log(`> [webserver] Loading json()...`);
        server.use(express.json());

        console.log(`> [webserver] Loading routes...`);
        server.use('/', routes);
        
        console.log(`> [webserver] Waiting for port to be available...`);
        const port = process.env.PORT || 3000;
        server.listen(port);

        console.log(`> [webserver] Starting done! Contected in port`,port);


    }

    function stop() {
        console.log(`> [webserver] Stopping...`);
        server.close();
        console.log(`> [webserver] Stopping done!`);
    }

    return {
        start,
        stop
    }

}

export default createWebserver;

require('dotenv').config({ path: '.env'});

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

function createWebserver() {

    function start() {
        console.log(`> [webserver] Starting...`);
        console.log(`> [webserver] Loading express()...`);
        this.server = express();

        console.log(`> [webserver] Loading cors()...`);
        this.server.use(cors());

        console.log(`> [webserver] Loading cors()...`);
        this.server.use(express.json());

        console.log(`> [webserver] Waiting for port to be available...`);
        const port = process.env.PORT || 3000;
        server.listen(port);

        console.log(`> [webserver] Starting done! Contected in port`,port);

    }

    function stop() {
        console.log(`> [webserver] Stopping...`);
        console.log(`> [webserver] Gracefully waiting for all clients...`);
        console.log(`> [webserver] Closing all ports...`);
        console.log(`> [webserver] Stopping done!`);
    }

    return {
        start,
        stop
    }

}

export default createWebserver;

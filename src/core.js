import createDatabaseConnection from './database/index.js';
import createWebserver from './webserver/index.js';

function createCore() {

    const database = createDatabaseConnection();
    const webserver = createWebserver();

    function start() {
        console.log(`> [core] Starting...`);
        database.start();
        webserver.start();
        console.log(`> [core] Starting done! System running!`);
    }

    function stop() {
        console.log(`> [core] Stopping...`);
        database.stop();
        webserver.stop();
        console.log(`> [core] Stopping done! Bye`);
    }

    return {
        start,
        stop
    }

}

export default createCore;

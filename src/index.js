import dotenv from 'dotenv';
dotenv.config({ path: '.env'})

import createCore from './core.js';

const core = createCore();

try {
    core.start();
    // core.stop();
    
}

catch (err) {
    console.log('[index] Uncaught error');
    console.log(err);

}

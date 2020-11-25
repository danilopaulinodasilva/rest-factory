import { Router } from 'express';
const routes = Router();

import user from '../../useCases/user/index.js';

const fim  = user();

routes.get('/', async (req,res) => {
    res.send(await fim.read());
});

export default routes;

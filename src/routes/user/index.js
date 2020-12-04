import { Router } from 'express';
const routes = Router();

import user from '../../useCases/user/index.js';

const userRead = user().read();

routes.get('/', async (req,res) => {
    res.send(await userRead);
});

export default routes;

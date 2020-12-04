import { Router } from 'express';
const routes = Router();

import userReadFactory from '../../factories/userReadFactory.js';

routes.get('/', async (req,res) => {
    res.send(await userReadFactory.read());
});

export default routes;

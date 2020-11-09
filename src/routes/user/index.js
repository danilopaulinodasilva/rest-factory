import { Router } from 'express';
const routes = Router();

import user from '../../services/user/index';

const userFactory = user();

routes.get('/', (req,res) => {
    res.send(userFactory.index());
});

export default routes;
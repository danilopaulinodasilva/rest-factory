import { Router } from 'express';
const routes = Router();

import userRoutes from './user/index.js';

routes.use("/user", userRoutes);

export default routes;

import { Router } from 'express';
const routes = Router();

import userRoutes from './user/index.js';
import movieRoutes from './movie/index.js';

routes.use("/user", userRoutes);
routes.use("/movie", movieRoutes);

export default routes;

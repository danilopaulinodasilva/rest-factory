import { Router } from 'express';
const routes = Router();

routes.get('/', (req,res) => {
    res.send("movies route");
});

export default routes;
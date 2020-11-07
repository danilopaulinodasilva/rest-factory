import { Router } from 'express';
const routes = Router();

routes.get('/', (req,res) => {
    res.send("users route");
});

export default routes;
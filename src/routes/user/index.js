import { Router } from 'express';
const routes = Router();

routes.get('/post', (req,res) => {
    res.send("aeeeee");
});

export default routes;
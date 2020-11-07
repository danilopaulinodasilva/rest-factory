import express from 'express';
const Router = express.Router();

/**
 * Routes
 */

Router.get('/post', (req,res) => {
    res.send("aeeeee");
});
// Router.post('/post', isAuth,  creationValidation(), createPost);
// Router.put('/post/:id', isAuth, editValidation(), putPost);
// Router.delete('/post/:id', isAuth, deletePost);

/**
 * Export
 */
export default Router;
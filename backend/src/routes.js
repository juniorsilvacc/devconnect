const {Router} = require('express');
const routes = Router();

const UserControllers = require('./controllers/UserControllers');
const PostControllers = require('./controllers/PostControllers');

routes.post("/users", UserControllers.store);
routes.get("/users", UserControllers.index);

module.exports = routes;
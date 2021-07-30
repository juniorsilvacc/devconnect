const {Router} = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = Router();
const upload = multer(uploadConfig);

const UserControllers = require('./controllers/UserControllers');
const SigninController = require('./controllers/SigninControollers');
const PostControllers = require('./controllers/PostControllers');


routes.post("/users", UserControllers.store);
routes.get("/users", UserControllers.index);

routes.post("/signin", SigninController.signin);

routes.post("/posts", upload.single('image'), PostControllers.store);
routes.get("/posts", PostControllers.index);

module.exports = routes;
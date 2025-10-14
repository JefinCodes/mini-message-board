const { Router } = require("express");
const { getMessages } = require('../controllers/indexController');
const { viewForm } = require('../controllers/formController');
const { createMessage } = require('../controllers/postController');

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new", viewForm);
indexRouter.post("/new", createMessage);

module.exports = indexRouter;
const { Router } = require("express");
const { getMessages } = require('../controllers/indexController');
const { viewForm } = require('../controllers/formController');

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new", viewForm);

module.exports = indexRouter;
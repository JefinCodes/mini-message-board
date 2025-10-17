const { Router } = require("express");
const { getMessage } = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get("/:index", getMessage);

module.exports = messageRouter;
const { messages } = require('../messageStore');
const MessageNotFoundError = require("../errors/MessageNotFoundError");

function getMessage(req, res) {
    if(req.params.index >= messages.length){
        throw new MessageNotFoundError("Message not found");
    }
    res.render("message", { message: messages[req.params.index] });
};

module.exports = { getMessage };
const { messages } = require('../messageStore');

function getMessage(req, res) {
    res.render("message", { message: messages[req.params.index] });
};

module.exports = { getMessage };
const { messages } = require('../messageStore');

function getMessages(req, res) {
    res.render("index", { messages: messages });
};

module.exports = { getMessages };
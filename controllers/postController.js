const { messages } = require('../messageStore');

function createMessage(req, res) {
    messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
    res.redirect("/");
};

module.exports = { createMessage };
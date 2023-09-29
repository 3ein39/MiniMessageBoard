const express = require('express');
const router = express.Router();
const Message = require('../models/message');



/* GET home page. */
router.get('/', async function(req, res, next) {
    const messages = await Message.find({});
    res.render('index', { title: 'Mini Message Board', messages: messages});
});

router.get('/new', function(req, res, next) {
    res.render('form', { title: 'New Message'});
});

router.post('/new', async function(req, res, next) {
    // create a new message
    const newMessage = new Message({
        text: req.body.text,
        user: req.body.user
    });
    // save the message to the database
    await newMessage.save();
    res.redirect('/');
});

module.exports = router;

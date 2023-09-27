const express = require('express');
const router = express.Router();


// some placeholder messages
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    }
    , {
          text: "Hello World!",
          user : "Charles",
          added: new Date()
    }
    , {
          text: "Meow!",
          user : "Sayed the cat",
          added: new Date()
  }]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MiniMessageBoard', messages : messages});
});

router.get('/new', function(req, res, next) {
    res.render('form', { title: 'New Message'});
});

router.post('/new', function(req, res, next) {
    const newMessage = {
        // named according to the form's input names
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    };
    messages.push(newMessage);
    // console.log(messages);
    // redirect to the home page
    res.redirect('/');
});

module.exports = router;

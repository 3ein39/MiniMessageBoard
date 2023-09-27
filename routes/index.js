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
  res.render('index', { title: 'Express' });
});

module.exports = router;

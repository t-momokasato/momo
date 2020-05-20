var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Hello World!', text: 'Expressから逃げてたけど流石に勉強しなきゃヤバイよ！！' });
});

module.exports = router;
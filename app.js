var createError = require('http-errors');　//エラー
var express = require('express');　//Express本体
var path = require('path');　//ファイルパスを扱うためのパす
var cookieParser = require('cookie-parser');
var logger = require('morgan');　//ログ出力に対するモジュール

//requireでロードし、それぞれ割り当てられるアドレス事に呼び出されるように設定
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//パスと関数を指定している
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//moduleオブジェクトのexpressというプロパティーにappオブジェクトを設定します
module.exports = app;

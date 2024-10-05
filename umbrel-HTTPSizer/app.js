const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var favicon = require('serve-favicon')

const CONSTANTS = require('./utils/const.js');

const indexRouter = require('./routes/index');
const firstRunRouter = require('./routes/firstRun');
const httpsErrorRouter = require('./routes/httpsError');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use('/', indexRouter);
app.use('/first-run', firstRunRouter);
app.use('/https-error', httpsErrorRouter);

app.get('/ssl.cert', function(req, res){
  res.download(CONSTANTS.HTTPS_CERT_PATH); // Set disposition and send it.
});

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

module.exports = app;

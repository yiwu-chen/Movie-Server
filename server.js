const CONSTANTS = require('./consts');
const express = require('express');
const app = express();

//Configuration of CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:3000");//Change URL if the client deployed to the remote host
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({     //Create a session per cookie, to store and display different infor for different users
  secret: 'keyboard cat',
  cookie: {}
}));

const mongoose = require('mongoose');
mongoose.connect(CONSTANTS.MONGODB_URL);

require('./users/user-controller')(app);
require('./movies/movie-controller')(app);
require('./comments/comment-controller')(app);

app.listen(process.env.PORT || 4000);

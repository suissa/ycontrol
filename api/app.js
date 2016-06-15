/*jshint node:true*/
'use strict';

const db = require('./_config/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compress = require('compression');
const port = process.env.PORT || 7200;

const environment = process.env.NODE_ENV;

let api = {};

api.users = require('./modules/users/routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compress());            // Compress response data with gzip
// app.use(logger('dev'));
// app.use(favicon(__dirname + '/favicon.ico'));
// app.use(cors());                // enable ALL CORS requests
// app.use(errorHandler.init);

app.use('/api/users', api.users);

//routes = require('./routes/index')(app);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});
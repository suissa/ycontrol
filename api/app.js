/*jshint node:true*/
'use strict';

const db = require('./_config/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compress = require('compression');
const port = process.env.PORT || 7200;

const environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compress());            // Compress response data with gzip

// let api = {};
// api.users = require('./modules/users/routes');
// app.use('/api/users', api.users);

/* Cria as rotas dinamicamente a partir dos módulos */
let api = {};
let modules = require('./getModules');

const createRoutes = (element, index) => {
    api[element] = require('./modules/'+element+'/routes');
    app.use('/api/'+element, api[element]);
};

modules.forEach(createRoutes);
/* Cria as rotas dinamicamente a partir dos módulos */

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
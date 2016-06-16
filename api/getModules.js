'use strict';

const fs = require('fs');
const path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

const modules = getDirectories('./modules/');

module.exports = modules;
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
	name: require('./../../_atoms/atom-name')
}

module.exports = new Schema(Molecule);
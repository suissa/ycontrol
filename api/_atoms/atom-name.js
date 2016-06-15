const Atom = {
	type: String
  , get: require('./../_quarks/toUpper')
  , set: require('./../_quarks/toLower')
  , validate: require('./../_hadrons/nameMongooseValidade')
  , required: true
}

module.exports = Atom;
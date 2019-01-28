const success = require('./enhancer/success/success');
const repair = require('./enhancer/repair/repair');
const failure = require('./enhancer/failure/failure');

const enhancer = {
  repair,
  success,
  failure
}

module.exports = {
  enhancer
}
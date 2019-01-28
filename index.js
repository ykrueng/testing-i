const success = require('./enhancer/success/success');
const repair = require('./enhancer/repair/repair');

const enhancer = {
  repair: (item) => {
    const newItem = { ...item };
    newItem.durability = 100;

    return newItem;
  },
  success
}

module.exports = {
  enhancer
}
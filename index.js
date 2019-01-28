const e_levels = {
  16: 'PRI',
  17: 'DUO',
  18: 'TRI',
  19: 'TET',
  20: 'PEN'
}

const enhancer = {
  repair: (item) => {
    const newItem = { ...item };
    newItem.durability = 100;

    return newItem;
  }
}

module.exports = {
  enhancer
}
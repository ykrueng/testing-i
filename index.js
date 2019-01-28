const e_levels = [
'0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
'10',
'11',
'12',
'13',
'14',
'15',
'PRI',
'DUO',
'TRI',
'TET',
'PEN'
]

const enhancer = {
  repair: (item) => {
    const newItem = { ...item };
    newItem.durability = 100;

    return newItem;
  },

  success: (item) => {
    if (!checkName(item)) throw new Error('Invalid name property');

    if (!checkType(item)) throw new Error('Invalid type property');

    if (!checkDurability(item)) throw new Error('Invalid durability property');

    if (!checkEnhancement(item)) throw new Error('Invalid enhancement property');

    const newEnhancementLevel = addEnhancement(item.enhancement);

    const newItem = {
      ...item,
      name: updateName(newEnhancementLevel, item.name),
      enhancement: newEnhancementLevel
    };

    return newItem;
  }
}

function checkName(item) {
  return item.name && typeof item.name === 'string';
}

function checkType(item) {
  return item.type && (item.type === 'weapon' || item.type === 'armor');
}

function checkDurability(item) {
  return item.durability && item.durability > 0 && item.durability <= 100;
}

function checkEnhancement(item) {
  return item.enhancement && typeof item.enhancement === 'string' && e_levels.includes(item.enhancement);
}

function addEnhancement(currentLevel) {
  if (currentLevel === 'TET') return currentLevel;
  const current = e_levels.findIndex(e => e === currentLevel);
  return e_levels[current + 1];
}

function updateName(currentLevel, name) {
  const strippedName = name.slice(name.indexOf(']') + 1);

  const current = e_levels.findIndex(e => e === currentLevel);
  return `[${current < 16 ? '+' : ''}${e_levels[current]}] ${strippedName}`;

}

module.exports = {
  enhancer,
  e_levels
}
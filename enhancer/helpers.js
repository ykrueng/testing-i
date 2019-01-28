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
];

module.exports = {
  checkName,
  checkType,
  checkDurability,
  checkEnhancement,
  addEnhancement,
  updateName
};

function checkName(item) {
  return item.name && typeof item.name === "string";
}

function checkType(item) {
  return item.type && (item.type === "weapon" || item.type === "armor");
}

function checkDurability(item) {
  const currentLevel = e_levels.findIndex(e => e === item.enhancement);
  if (currentLevel <= 14 && item.durability < 20) throw new Error('Invalid durability & enhancement level');
  return item.durability && item.durability > 0 && item.durability <= 100;
}

function checkEnhancement(item) {
  return (
    item.enhancement &&
    typeof item.enhancement === "string" &&
    e_levels.includes(item.enhancement)
  );
}

function addEnhancement(currentLevel, durability) {
  const current = e_levels.findIndex(e => e === currentLevel);

  if (currentLevel === "TET"
    || durability < 25 && current <= 14
    || durability < 10 && current >= 15
  ) return currentLevel;
  return e_levels[current + 1];
}

function updateName(currentLevel, name) {
  const strippedName = name.slice(name.indexOf("]") + 1);

  const current = e_levels.findIndex(e => e === currentLevel);
  return `[${current < 16 ? "+" : ""}${e_levels[current]}] ${strippedName}`;
}

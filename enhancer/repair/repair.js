module.exports = item => {
  const newItem = { ...item };
  newItem.durability = 100;

  return newItem;
};

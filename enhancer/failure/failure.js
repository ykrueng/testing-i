const {
  checkName,
  checkType,
  checkDurability,
  checkEnhancement,
  reduceDurability
} = require("../helpers");

module.exports = item => {
  if (!checkName(item)) throw new Error("Invalid name property");

  if (!checkType(item)) throw new Error("Invalid type property");

  if (!checkDurability(item)) throw new Error("Invalid durability property");

  if (!checkEnhancement(item)) throw new Error("Invalid enhancement property");

  const { enhancement, durability } = reduceDurability(item.enhancement, item.durability);

  const newItem = {
    ...item,
    enhancement,
    durability
  };

  return newItem;
};

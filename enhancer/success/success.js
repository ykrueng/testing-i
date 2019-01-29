const {
  checkName,
  checkType,
  checkDurability,
  checkEnhancement,
  addEnhancement,
  updateName
} = require("../helpers");

module.exports = item => {
  if (!checkName(item)) throw new Error("Invalid name property");

  if (!checkType(item)) throw new Error("Invalid type property");

  if (!checkDurability(item)) throw new Error("Invalid durability property");

  if (!checkEnhancement(item)) throw new Error("Invalid enhancement property");

  const newEnhancementLevel = addEnhancement(item.enhancement, item.durability);

  const newItem = {
    ...item,
    name: updateName(newEnhancementLevel, item.name),
    enhancement: newEnhancementLevel
  };

  return newItem;
};

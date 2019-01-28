const { enhancer } = require('../../index');

describe('Enhancer Repair', () => {
  const item = {
    name: 'item',
    enhancement: 0,
    durability: 0,
  }

  it('should return new item', () => {
    expect(enhancer.repair(item)).not.toBe(item);
  });
  it('should restore durability to 100', () => {
    expect(enhancer.repair(item).durability).toBe(100);
  })
});
const { enhancer } = require('../../index');

describe('Enhancer Repair', () => {
  const item = {
    name: 'item',
    type: 'weapon',
    durability: 100,
    enhancement: '0',
  }

  describe('Invalid Properties Check', () => {
    it('should throw error for invalid name', () => {
      expect(() => enhancer.repair({})).toThrow();
      expect(() => enhancer.repair({ name: null })).toThrow();
      expect(() => enhancer.repair({ name: 1 })).toThrow();
    });
    
    test('should throw error for invalid type', () => {
      expect(() => enhancer.repair({})).toThrow();
      expect(() => enhancer.repair({ type: null })).toThrow();
      expect(() => enhancer.repair({ type: 1 })).toThrow();
      expect(() => enhancer.repair({ type: 'knive' })).toThrow();
    });
    
    test('should throw error for invalid durability', () => {
      expect(() => enhancer.repair({})).toThrow();
      expect(() => enhancer.repair({ durability: null })).toThrow();
      expect(() => enhancer.repair({ durability: -1 })).toThrow();
      expect(() => enhancer.repair({ durability: 190 })).toThrow();
    });
    
    test('should throw error for invalid enhancement', () => {
      expect(() => enhancer.repair({})).toThrow();
      expect(() => enhancer.repair({ enhancement: null })).toThrow();
      expect(() => enhancer.repair({ enhancement: 1 })).toThrow();
      expect(() => enhancer.repair({ durability: 190 })).toThrow();
    });
  });

  it('should return new item', () => {
    const newItem = enhancer.repair(item);

    expect(enhancer.repair(item)).not.toBe(item);
    expect(typeof newItem.name).toBe('string');
    expect(typeof newItem.type).toBe('string');
    expect(typeof newItem.durability).toBe('number');
    expect(typeof newItem.enhancement).toBe('string');
  });

  it('should restore durability to 100', () => {
    expect(enhancer.repair(item).durability).toBe(100);
  })
})
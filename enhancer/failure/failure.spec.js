const { enhancer } = require('../../index');

describe('Enhancer Failure', () => {
  const item = {
    name: 'item',
    type: 'weapon',
    durability: 100,
    enhancement: '0',
  }

  describe('Invalid Properties Check', () => {
    it('should throw error for invalid name', () => {
      expect(() => enhancer.failure({})).toThrow();
      expect(() => enhancer.failure({ name: null })).toThrow();
      expect(() => enhancer.failure({ name: 1 })).toThrow();
    });
    
    test('should throw error for invalid type', () => {
      expect(() => enhancer.failure({})).toThrow();
      expect(() => enhancer.failure({ type: null })).toThrow();
      expect(() => enhancer.failure({ type: 1 })).toThrow();
      expect(() => enhancer.failure({ type: 'knive' })).toThrow();
    });
    
    test('should throw error for invalid durability', () => {
      expect(() => enhancer.failure({})).toThrow();
      expect(() => enhancer.failure({ durability: null })).toThrow();
      expect(() => enhancer.failure({ durability: -1 })).toThrow();
      expect(() => enhancer.failure({ durability: 190 })).toThrow();
    });
    
    test('should throw error for invalid enhancement', () => {
      expect(() => enhancer.failure({})).toThrow();
      expect(() => enhancer.failure({ enhancement: null })).toThrow();
      expect(() => enhancer.failure({ enhancement: 1 })).toThrow();
      expect(() => enhancer.failure({ durability: 190 })).toThrow();
    });
  });

  it('should return new item', () => {
    const newItem = enhancer.failure(item);

    expect(enhancer.failure(item)).not.toBe(item);
    expect(typeof newItem.name).toBe('string');
    expect(typeof newItem.type).toBe('string');
    expect(typeof newItem.durability).toBe('number');
    expect(typeof newItem.enhancement).toBe('string');
  });
})
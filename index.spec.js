const { enhancer, e_levels } = require('./index');

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

describe('Enhancer Success', () => {
  const item = {
    name: 'item',
    type: 'weapon',
    durability: 100,
    enhancement: '0',
  }

  describe('Invalid Properties Check', () => {
    it('should throw error for invalid name', () => {
      expect(() => enhancer.success({})).toThrow();
      expect(() => enhancer.success({ name: null })).toThrow();
      expect(() => enhancer.success({ name: 1 })).toThrow();
    });
    
    test('should throw error for invalid type', () => {
      expect(() => enhancer.success({})).toThrow();
      expect(() => enhancer.success({ type: null })).toThrow();
      expect(() => enhancer.success({ type: 1 })).toThrow();
      expect(() => enhancer.success({ type: 'knive' })).toThrow();
    });
    
    test('should throw error for invalid durability', () => {
      expect(() => enhancer.success({})).toThrow();
      expect(() => enhancer.success({ durability: null })).toThrow();
      expect(() => enhancer.success({ durability: -1 })).toThrow();
      expect(() => enhancer.success({ durability: 190 })).toThrow();
    });
    
    test('should throw error for invalid enhancement', () => {
      expect(() => enhancer.success({})).toThrow();
      expect(() => enhancer.success({ enhancement: null })).toThrow();
      expect(() => enhancer.success({ enhancement: 1 })).toThrow();
      expect(() => enhancer.success({ durability: 190 })).toThrow();
    });
  });

  it('should return new item', () => {
    const newItem = enhancer.success(item);

    expect(enhancer.success(item)).not.toBe(item);
    expect(typeof newItem.name).toBe('string');
    expect(typeof newItem.type).toBe('string');
    expect(typeof newItem.durability).toBe('number');
    expect(typeof newItem.enhancement).toBe('string');
  });

  describe('Increase Enhancement Level', () => {
    it('should increase enhancement level by 1', () => {
      expect(enhancer.success({ ...item, enhancement: '0' }).enhancement).toBe('1');
      expect(enhancer.success({ ...item, enhancement: '10' }).enhancement).toBe('11');
      expect(enhancer.success({ ...item, enhancement: '15' }).enhancement).toBe('PRI');
      expect(enhancer.success({ ...item, enhancement: 'DUO' }).enhancement).toBe('TRI');
      expect(enhancer.success({ ...item, enhancement: 'TRI' }).enhancement).toBe('TET');
      expect(enhancer.success({ ...item, enhancement: 'TET' }).enhancement).toBe('TET');
    })
  });

  it('should update name based on Enhancement Level', () => {
    expect(enhancer.success({ ...item, enhancement: '0' }).name).toBe('[+1] item');
    expect(enhancer.success({ ...item, enhancement: '10' }).name).toBe('[+11] item');
    expect(enhancer.success({ ...item, enhancement: '15' }).name).toBe('[PRI] item');
    expect(enhancer.success({ ...item, enhancement: 'DUO' }).name).toBe('[TRI] item');
    expect(enhancer.success({ ...item, enhancement: 'TRI' }).name).toBe('[TET] item');
    expect(enhancer.success({ ...item, enhancement: 'TET' }).name).toBe('[TET] item');
  })
})
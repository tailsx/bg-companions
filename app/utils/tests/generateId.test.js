import generateId from '../generateId';

describe('generateId()', () => {
  it('should have 8 characters', () => {
    const id1 = generateId();
    const id2 = generateId();
    const id3 = generateId();
    const expectedLength = 8;

    expect(id1).toHaveLength(expectedLength);
    expect(id2).toHaveLength(expectedLength);
    expect(id3).toHaveLength(expectedLength);
  });

  it('should random different ids', () => {
    const id1 = generateId();
    const id2 = generateId();

    expect(id1).not.toMatch(id2);
  });

  it('should have same result with same seed number', () => {
    const seedId = 123123;
    const id1 = generateId(seedId);
    const id2 = generateId(seedId);

    expect(id1).toMatch(id2);
  });
});

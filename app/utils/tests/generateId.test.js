import generateId from '../generateId';

describe('generateId()', () => {
  it('should random different ids', () => {
    const id1 = generateId();
    const id2 = generateId();

    expect(id1).not.toEqual(id2);
  });
});

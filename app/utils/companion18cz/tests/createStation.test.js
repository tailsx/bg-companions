import createStation from '../createStation';

describe('createStation()', () => {
  it('should have current structure for station', () => {
    const args = {
      type: 'train1',
      amount: 100,
    };
    const station = createStation({ ...args });

    expect(station).toHaveProperty('id');
    expect(station).toHaveProperty('type', args.type);
    expect(station).toHaveProperty('amount', args.amount);
  });

  it('should have id have 8 be characters', () => {
    const args = {
      type: 'train1',
      amount: 100,
    };
    const station = createStation({ ...args });

    expect(station).toHaveProperty('id');
    expect(station.id).toHaveLength(8);
  });
});

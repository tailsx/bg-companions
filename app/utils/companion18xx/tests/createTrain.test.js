import createTrain from '../createTrain';

describe('createTrain()', () => {
  it('should have current structure for train', () => {
    const args = {
      type: 'train1',
      name: 'train',
      lastRan: 100,
    };
    const train = createTrain(args.name, args.type, args.lastRan);

    expect(train).toHaveProperty('id');
    expect(train).toHaveProperty('type', args.type);
    expect(train).toHaveProperty('name', args.name);
    expect(train).toHaveProperty('lastRan', args.lastRan);
  });

  it('should have id have 8 be characters', () => {
    const args = {
      type: 'train1',
      name: 'train',
      lastRan: 100,
    };
    const train = createTrain(args.name, args.type, args.lastRan);

    expect(train).toHaveProperty('id');
    expect(train.id).toHaveLength(8);
  });
});

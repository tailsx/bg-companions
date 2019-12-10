import createPrivate from '../createPrivate';

describe('createPrivate()', () => {
  it('should have current structure for private', () => {
    const args = {
      revenue: 10,
      hasAbility: false,
      marketValue: 10,
    };
    const priv = createPrivate(args.revenue, args.marketValue, args.hasAbility);

    expect(priv).toHaveProperty('id');
    expect(priv).toHaveProperty('marketValue', args.marketValue);
    expect(priv).toHaveProperty('revenue', args.revenue);
  });

  it('should have id have 8 be characters', () => {
    const args = {
      revenue: 10,
      hasAbility: false,
      marketValue: 10,
    };
    const priv = createPrivate(args.revenue, args.marketValue, args.hasAbility);

    expect(priv).toHaveProperty('id');
    expect(priv.id).toHaveLength(8);
  });
});

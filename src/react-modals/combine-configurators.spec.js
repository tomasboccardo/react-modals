import combineConfigurators from './combine-configurators';

describe('combineConfigurators', () => {
  let configuratorsMock;

  beforeEach(() => {
    configuratorsMock = [
      state => (state.foo ? { title: state.foo } : null),
      state => (state.bar ? { message: state.bar } : null),
    ];
  });

  it('should create a function', () => {
    const configurator = combineConfigurators(...configuratorsMock);
    expect(configurator).toBeInstanceOf(Function);
  });

  it('should combine configurators', () => {
    const configurator = combineConfigurators(...configuratorsMock);
    expect(configurator({ foo: 'foo', bar: 'bar' }))
      .toEqual({
        modalsConfig: [{ title: 'foo' }, { message: 'bar' }],
      });
  });

  it('should exclude null configurations', () => {
    const configurator = combineConfigurators(...configuratorsMock);
    expect(configurator({ foo: 'foo' }))
      .toEqual({
        modalsConfig: [{ title: 'foo' }],
      });
  });
});

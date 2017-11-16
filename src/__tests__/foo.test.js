import assert from 'assert';

describe('foo', () => {
  it('hoge', () => {
    const obj = {
      hoge: 1,
      fuga: 2,
    };
    assert(obj.hoge === 1);
    assert(obj.fuga === 1);
  });
  it('window.location', () => {
    assert(window.location === 1);
  });
});

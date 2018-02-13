import assert from 'assert';

import testCanvas from '../testCanvas';

describe('testCanvas', () => {
  it('canvasについてもテストできる', () => {
    const imageData = testCanvas(20, 10);
    assert(imageData.width === 20);
    assert(imageData.data instanceof Uint8ClampedArray);
    assert(imageData.data.length === 20 * 10 * 4);
  });
});

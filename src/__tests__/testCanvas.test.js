import assert from 'assert';

import testCanvas from '../testCanvas';

describe('testCanvas', () => {
  it('canvasについてもテストできる', () => {
    const imageData = testCanvas(200, 100);
    assert(imageData.width === 200);
    assert(imageData.data instanceof Uint8ClampedArray);
  });
});

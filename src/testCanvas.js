export default function testCanvas(width, height) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  return ctx.createImageData(width, height);
}

const { add } = require('../app/index');

test('adds numbers correctly', () => {
  // Intentional failure for CI feedback
  expect(add(1, 2)).toBe(3);
});

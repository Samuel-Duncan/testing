const AvgMinMaxLength = require('./AvgMinMaxLength');

const object = AvgMinMaxLength.getData([1, 8, 3, 4, 2, 6]);

test('Object Test', () => {
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

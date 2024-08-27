
const findMax = require('./script');

const testArray= [1, 2, 3]

test('returns max', () => {
  expect(findMax(testArray)).toBe(3);
});

test('returns max', () => {
    expect(findMax(testArray)).toBeDefined;
  });
  


const testArray2= [0]

test('returns max', () => {
  expect(findMax(testArray2)).toBe(0);
});

test('returns max', () => {
    expect(findMax(testArray2)).toBeNull;
  });



const testArray3= [0, 'string', 1];

test('returns max', () => {
  expect(findMax(testArray3)).not.toBe(0);
});



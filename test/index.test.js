// Tested on 5 and 15 instead of 1 and 42
// Tested GenerateInRange, generateInRangeUnique, generateInRangeUniqueGenerator
// NOT tested resetReturnedNumbers, resetNumbers, geneRateFrom1To42
const RandomIntGenerator = require('../index');

const mockRandomIntGenerator = new RandomIntGenerator(5, 15);

describe("generateInRange", () => {
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRange(5, 15)
    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(15)
  });

});

describe("generateInRangeUnique", () => {
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be bigger than 5 and less then 15', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBeGreaterThanOrEqual(5)
    expect(result).toBeLessThanOrEqual(15)
  });
  test('[1] Should be null', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBe(null)
  });
  test('[1] Should be null', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBe(null)
  });
  test('[1] Should be null', () => {
    const result = mockRandomIntGenerator.generateInRangeUnique()
    expect(result).toBe(null)
  });

});

describe("generateInRangeUniqueGenerator", () => {

  const uniqueGenerator = new RandomIntGenerator(5, 15);

   test('[1] Should yeild 10 times', async () => {

    const expectedValues = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const values = [];
    for await (let val of uniqueGenerator.generateInRangeUniqueGenerator()) {
      values.push(val);
    }

    expect(expectedValues.sort()).toEqual(values.sort());
  });
});
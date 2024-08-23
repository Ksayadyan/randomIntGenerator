const {
  validateRandomGeneratorContructor,
  validateMinMax 
} = require('./lib/validations/random-generator.validation');
const RandomNumberResource = require('./resource/random-number/random-number.resource');

const RandomIntGenerator = class {
  constructor(min, max, randomNumberResource = new RandomNumberResource()) {
    validateRandomGeneratorContructor({ min, max });
    this.randomNumberResource = randomNumberResource
    this.returnedNumbers = new Set();
    this.min = min;
    this.max = max;
  }

  geneRateFrom1To42() {
    return Math.floor(Math.random() * 42) + 1;
  }

  // Generates a random number in a range;
  generateInRange(min, max) {
    validateMinMax(({ min, max }));

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // Returns unique number in range every time. Returns undefined if there are no unique numbers left
  generateInRangeUnique() {

    if (this.returnedNumbers.size == this.max - this.min + 1) {
      return null;
    }

    let result = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    if (this.returnedNumbers.has(result)) {
      result = this.generateInRangeUnique();
    }

    this.returnedNumbers.add(result);

    return result;
  }

  // Returns unique number in range every time. Returns undefined if there are no unique numbers left
  async *generateInRangeUniqueGenerator() {

    while (this.returnedNumbers.size < this.max - this.min + 1) {

      let result = await this.randomNumberResource.getRandomNumber(this.min, this.max);
      if (this.returnedNumbers.has(result)) {
        result = this.generateInRangeUnique();
      }

      this.returnedNumbers.add(result);

      yield result;
    }
  }

  // Resets the max and min numbers,
  resetNumbers(max, min) {
    validateMinMax(({ min, max }));

    this.max = max;
    this.min = min;

  }

  // Clears the saved values returned from generateInRangeUnique
  resetReturnedNumbers() {
    this.returnedNumbers.clear();
  }
}

module.exports = RandomIntGenerator;


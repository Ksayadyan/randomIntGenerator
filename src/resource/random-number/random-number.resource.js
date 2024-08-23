const PublicAxiosNumberFetcher = require("../fetchers/axios");

module.exports = class RandomNumberResource {
  constructor(fethcer = new PublicAxiosNumberFetcher()) {
    this.fethcer = fethcer;
  }

  async getRandomNumber(min, max) {
    return this.fethcer.getRandomNumber(min, max);
  }
}
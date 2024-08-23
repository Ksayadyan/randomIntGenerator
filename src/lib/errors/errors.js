module.exports.ValidationError = class extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
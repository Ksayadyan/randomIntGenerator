# Random Int Generator

## About

Package to generate random numbers.
Can be used to generate numbers in a range, using async generator, or using third party (resource)

## Installation

Make sure you have [npm](https://www.npmjs.com/) to installed.

## Install dependencies

Go to project directory and run

```node
$ npm install 
```

## Install dependencies

```node
$ npm install 
```

## Usage

```node
cosnt RandomIntGenerator = require('./index');

const generator = new RandomIntGenerator(1,15, OptionalThirdPartyResource); // Arguments used to get 
unique random values 

const randomNumber = generator.generateInRange(42, 90);

console.log(randomNumber) // 8
```

[MIT](https://choosealicense.com/licenses/mit/)
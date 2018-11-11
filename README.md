# jotils ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

jotils is a JavaScript utility library.

## Installation

Using [npm](https://www.npmjs.com/package/jotils) to install jotils.

```bash
$ npm i -g npm
$ npm i --save jotils
```

## Usage Examples

```react
import {shuffleArray, randomValueFromArray, removeDuplicatesInArray} from 'jotils';

const array = [1,2,3,4,5,6,7,8,9];
const shuffledArray = shuffleArray(array);
const randomValue = randomValueFromArray(array); 
const uniqueArray = removeDuplicatesInArray([1,2,3,1,3]);
```

```react
const jotils = require('jotils');

const array = [1,2,3,4,5,6,7,8,9];
const shuffledArray = jotils.shuffleArray(array);
const randomValue = jotils.randomValueFromArray(array); 
const uniqueArray = jotils.removeDuplicatesInArray([1,2,3,1,3]);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

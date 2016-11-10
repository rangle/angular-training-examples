'use strict';
'format es6'; // force SystemJS to transpile exercise

import addTwo, { helloStr } from './export-example';

const exampleDiv = document.getElementById('example');

exampleDiv.innerHTML = `${helloStr} and ${addTwo(6)}`;
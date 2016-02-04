[![npm version](https://img.shields.io/npm/v/react-rectangle.svg?style=flat-square)](https://www.npmjs.com/package/react-rectangle) [![Build Status](https://img.shields.io/travis/aush/react-rectangle.svg?style=flat-square)](https://travis-ci.org/aush/react-rectangle) [![Build status](https://img.shields.io/appveyor/ci/aush/react-rectangle.svg?style=flat-square)](https://ci.appveyor.com/project/aush/react-rectangle) [![Dependency Status](https://img.shields.io/david/aush/react-rectangle.svg?style=flat-square)](https://david-dm.org/aush/react-rectangle) [![devDependency Status](https://img.shields.io/david/dev/aush/react-rectangle.svg?style=flat-square)](https://david-dm.org/aush/react-rectangle#info=devDependencies) [![Coverage Status](https://img.shields.io/coveralls/aush/react-rectangle.svg?style=flat-square)](https://coveralls.io/github/aush/react-rectangle?branch=master)

#React Rectangle

A very simple React component which provides a box with fixed aspect ratio.

###Install

`npm install --save react-rectangle`

###Use

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Rectangle from 'react-rectangle';

ReactDOM.render(
  <div style={{ background: '#9e9e9e', width: '100vw', height: '100vh' }}>
    <Rectangle aspectRatio={[5, 3]}>
      <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
    </Rectangle>
  </div>,
  document.getElementById('app')
);
```

###API

The components takes a single prop 'aspectRatio'. You can pass a value in different formats:

* number: width to height ratio
* string: the same, but as a string
* array: [0] - relative width, [1] - relative height
* object: object.width - relative width, object.height - relative height

Also check [tests](https://github.com/aush/react-rectangle/blob/master/tests/rectangle.spec.js).

###Demo

Navigate to the 'demo' folder and execute

```
npm install
npm run build
npm start
```

Resize your browser's windows to see the component in action.

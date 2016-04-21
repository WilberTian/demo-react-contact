## Introduction

It's a simple contact app implemented with React and Redux.

The app shows how to use Redux and basic concepts (action, reducer and store) of Reudx.


## Installation

`npm install`


## Run

For this simple app, there are several startup scripts in package.json:

- "clean": "rimraf dist",
- "build:webpack": "cross-env NODE_ENV=production webpack --config webpack.config.prod.js",
- "build": "npm run clean && npm run build:webpack",
- "prod": "npm run build && node server.js",
- "dev": "node devServer.js",
- "start": "npm run dev",
- "lint": "eslint src || exit 0"


### Running Dev Server

Use `npm start` or `npm run dev` command to start the dev server.

Redux Devtools are enabled by default in development:

- `CTRL+H` Toggle DevTools Dock
- `CTRL+Q` Move DevTools Dock Position

![issue](https://cloud.githubusercontent.com/assets/5880320/14708586/7038b4f0-07fe-11e6-8c54-35c1839ce2ad.PNG)


### Building and Running Production Server

Use `npm run prod` to build and then run production server.
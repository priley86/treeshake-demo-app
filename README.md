This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app/tree/next/packages/create-react-app) 's `next` branch which utilizes Webpack4 tree shaking optimization.

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installation

```
$ yarn install
$ yarn build
$ yarn start
```

## Analyze

To analyze webpack bundle:

```
$ yarn analyze
```

Current build statistics with tree shaking:
![Image of Stats](statistics/with-treeshaking.png)

Current bundle analysis with tree shaking:
![Image of Stats](statistics/analyze-with-treeshaking.png)

Build statistics without tree shaking:
![Image of Stats](statistics/without-treeshaking.png)

Current bundle analysis without tree shaking:
![Image of Stats](statistics/analzye-without-treeshaking.png)

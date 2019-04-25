# depolyfill
To degrade a newer browser to simulate an older browser Javascript API.
Normally, developer would simulate a newer browser environment using [bable/polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill) in an old browser, such as iOS 8 safari.
But you can barely test your project whether your compatibility is enough on the latest browser like Chrome 73.
There are two ways to ensure that every latest features you use in your project will run without any exceptions: one is to use the full-version polyfill, the other way is use ES3 or ES5.
Here is the new solution, you use the specific feature and its polyfill, then test it on A headless browser with depolyfill.

## Usage
```javascript
npm install && npm run test
```

## Thanks
This tool will not be released without the amazing [caniuse](https://github.com/Fyrd/caniuse) project.
Also, it is inspired by [babel/polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill)

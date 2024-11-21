# `@chargerwallet/hd-common-connect-sdk`

`@chargerwallet/hd-common-connect-sdk` is a libarary that runs in the node enviroment. And communicates with transport in the normal way.

## Installation

Install library as npm module:

```javascript
npm install @chargerwallet/hd-common-connect-sdk
```

or

```javascript
yarn add @chargerwallet/hd-common-connect-sdk
```

## Initialization

```javascript
import HardwareSDK from '@chargerwallet/hd-common-connect-sdk';

function init() {
  HardwareSDK.init({
    debug: false,
  });
}
```
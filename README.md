# molibox-icon
[![npm version](https://img.shields.io/npm/v/molibox-icon.svg)](https://www.npmjs.com/package/molibox-icon)
[![Build Status](https://img.shields.io/travis/molibox/generator-molibox/master.svg)](https://travis-ci.org/molibox/molibox-icon)
[![devDependency Status](https://img.shields.io/david/dev/molibox/molibox-icon.svg)](https://david-dm.org/molibox/molibox-icon#info=devDependencies)

字体图标

## 使用

使用单独的molibox-icon包
#### 组件引入
先进行下载molibox-icon包
```
npm install --save molibox-icon
```
组件调用
```js
import ReactDom from 'react-dom';
import Icon from 'molibox-icon';

ReactDom.render(<Icon type="uf-bell"></Icon>, document.getElementById('target'))

```





#### 开发调试

```sh
$ git clone https://github.com/molibox/molibox-icon
$ cd molibox-icon
$ npm install
$ npm run dev
```
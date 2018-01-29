# react-native-ionicons

[![npm](https://img.shields.io/npm/v/react-native-ionicons.svg)](https://www.npmjs.com/package/react-native-ionicons)
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

* Install

```bash
npm i react-native-ionicons
```

* Link with react-native

```bash
react-native link react-native-ionicons
```

* Enjoy it

```jsx harmony
import Icon from 'react-native-ionicons'

const IconBar = () => (
  <View>
    <Icon name="add" />
    <Icon name="add" ios="ios-add-circle" />
    <Icon ios="ios-add" android="md-add" />
  </View>
)
```

## License

MIT

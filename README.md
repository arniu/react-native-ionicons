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
    <Icon ios="ios-add" android="md-add" />
  </View>
)
```

## PropTypes

|    Name | Type       | Default | Description                          |
| ------: | ---------- | ------- | ------------------------------------ |
|    name | `IconName` | -       | Name of the icon                     |
| android | `IconName` | -       | Name of the icon for Android devices |
|     ios | `IconName` | -       | Name of the icon for iOS devices     |
|  active | `?boolean` | false   | Render filled icons, **iOS only**    |
|   color | `?string`  | -       | Color of the icon                    |
|    size | `?number`  | 30      | Size of the icon, namely `fontSize`  |
|     ... | -          | -       | Other props of `Text` component      |

> `IconName` can be **short form** or **long form**.
> The short form is the main part of the icon name, such as the `add` to `ios-add-outline`.
>
> Icons can be found at [here](https://ionicframework.com/docs/ionicons/).

## License

MIT

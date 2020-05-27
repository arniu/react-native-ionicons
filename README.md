# react-native-ionicons

[![npm](https://img.shields.io/npm/v/react-native-ionicons.svg)](https://www.npmjs.com/package/react-native-ionicons)
[![Build Status](https://travis-ci.com/arniu/react-native-ionicons.svg?branch=master)](https://travis-ci.com/arniu/react-native-ionicons)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

Bring [Ionicons - Beautifully crafted open source icons](https://ionicons.com/v4/) to your awesome react-native apps.

## Usage

- Install

```bash
npm install react-native-ionicons@^4.x
```

Or:

```bash
yarn add react-native-ionicons@^4.x
```

- Link with `react-native` (**Optional**)

> Since v0.60, `react-native link` was replaced by the [autolinking mechanism](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).
> So, needn't do this when you're using React Native 0.60+.

```bash
react-native link react-native-ionicons
```

- Use it

```jsx harmony
import Icon from 'react-native-ionicons'

const IconBar = () => (
  <View>
    <Icon name="add" />
    <!-- This is same to the following: -->
    <Icon ios="ios-add" android="md-add" />
  </View>
)
```

## Install instructions for Windows projects

- Open the windows project file (.sln) in Visual Studio
- Right click the **Assets** folder and select **Add Existing**
- Browse to the `node_modules\react-native-ionicons\fonts` folder and select the font file
- Click the **Add** drop-down and select **Add as Link**
- In Visual Studio, select the font file in the **Assets** folder
- Set the **Copy To Output Directory** property to **Copy if newer**
- Save changes and recompile the project

## Prop Types

|    Name | Type       | Default | Description                     |
| ------: | ---------- | ------- | ------------------------------- |
|    name | `IconName` | -       | Icon name used on all platforms |
| android | `IconName` | -       | Icon name for Android devices   |
|     ios | `IconName` | -       | Icon name for iOS devices       |
|   color | `?string`  | -       | Icon color                      |
|    size | `?number`  | 30      | Icon size, namely `fontSize`    |

> `IconName` can be of short name or qualified name, which is the short one
> preffixed with `md-` or `ios-`.
>
> The short `IconName` can be found [here](https://ionicons.com/v4/cheatsheet.html).

## Versioning

We **DOT NOT** use [SemVer](http://semver.org/) for versioning. Though you can think about SemVer when reading our version, except our major number follow the one of Ionicons.

## [Share the Love](https://mozilla.github.io/for-firefox/)

<a title="I Use Firefox"
    rel="nofollow"
    href="https://www.mozilla.org/firefox/this-browser-comes-highly-recommended/?utm_source=devs-for.firefox.com&utm_medium=referral&utm_campaign=devs-for-firefox&utm_content=I-Use-Firefox">
<img style="border:0 none;"
    alt="I Use Firefox"
    srcset="https://code.cdn.mozilla.net/for-firefox/badges/assets/I-Use-Firefox.png,
            https://code.cdn.mozilla.net/for-firefox/badges/assets/I-Use-Firefox-2x.png 2x"
    src="https://code.cdn.mozilla.net/for-firefox/badges/assets/I-Use-Firefox.png">
</a>

## License

[MIT](./LICENSE)

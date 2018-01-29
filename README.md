# Ionic icons for React Native

## Usage

1. Install

```bash
npm i react-native-ionicons
```

2. Link with react-native

```bash
react-native link react-native-ionicons
```

3. Use in code

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

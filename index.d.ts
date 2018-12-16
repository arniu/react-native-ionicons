declare module 'react-native-ionicons' {
  import * as React from 'react'

  interface IconProps {
    name?: string
    android?: string
    ios?: string
    color?: string
    size?: number
  }

  class Icon extends React.PureComponent<IconProps> {}

  export default Icon
}

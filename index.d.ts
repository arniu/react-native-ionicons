import * as React from 'react'

declare module 'react-native-ionicons' {
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

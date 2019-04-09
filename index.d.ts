declare module 'react-native-ionicons' {
  import React from 'react'
  import { TextProps } from 'react-native'

  export type IconProps = TextProps & {
    name?: string
    android?: string
    ios?: string
    color?: string
    size?: number
  }

  class Icon extends React.PureComponent<IconProps> {}

  export default Icon
}

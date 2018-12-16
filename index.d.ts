declare module 'react-native-ionicons' {
  import * as React from 'react'
  import { StyleProp } from 'react-native'

  interface IconProps {
    name?: string
    android?: string
    ios?: string
    color?: string
    size?: number
    style?: StyleProp<any>
  }

  class Icon extends React.PureComponent<IconProps> {}

  export default Icon
}

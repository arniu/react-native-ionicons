/**
 * @flow
 */

import * as React from 'react'

declare module 'react-native-ionicons' {
  declare type IconProps = {
    name?: string,
    android?: string,
    ios?: string,
    color?: string,
    size?: number
  }

  declare type Icon = React.ComponentType<IconProps>

  declare export default Icon
}

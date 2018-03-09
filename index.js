import * as React from 'react'
import { Platform, Text } from 'react-native'
import getGlyph from './glyph'

export default class Icon extends React.PureComponent {
  constructor (props) {
    super(props)

    this.setRef = function (node) {
      this._ref = node
    }.bind(this)
  }

  setNativeProps (props) {
    if (this._ref) {
      this._ref.setNativeProps(props)
    }
  }

  render () {
    const { name, android, ios, active, size, color, ...props } = this.props

    const glyph = getGlyph(
      [Platform.select({ android, ios }), name],
      Platform.OS,
      active
    )

    const textStyle = {
      fontFamily: 'Ionicons',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: size,
      color
    }

    props.style = [textStyle, props.style]
    props.ref = this.setRef

    return (
      <Text {...props}>
        {glyph}
        {props.children}
      </Text>
    )
  }
}

Icon.defaultProps = {
  active: false,
  allowFontScaling: false,
  size: 30
}

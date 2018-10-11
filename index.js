import * as React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import tryGlyph from './glyph'

/**
 * (string, string, string) => string
 */
const getGlyph = Platform.select({
  ios: (_android, ios, name) => tryGlyph([ios, name], 'ios'),
  default: (android, _ios, name) => tryGlyph([android, name], 'md')
})

class Icon extends React.PureComponent {
  constructor (props) {
    super(props)

    this._setRef = ref => {
      this._text = ref
    }
  }

  setNativeProps (props) {
    if (this._text) {
      this._text.setNativeProps(props)
    }
  }

  render () {
    const {
      name,
      android,
      ios,
      size,
      color,
      style,
      children,
      ...textProps
    } = this.props

    const fontStyle = {
      fontSize: size,
      color
    }

    const glyph = getGlyph(android, ios, name)

    return (
      <Text
        {...textProps}
        style={[styles.default, fontStyle, style]}
        ref={this._setRef}
      >
        {glyph}
        {children}
      </Text>
    )
  }
}

export default Icon

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Ionicons',
    fontWeight: 'normal',
    fontStyle: 'normal'
  }
})

Icon.defaultProps = {
  allowFontScaling: false,
  size: 30
}

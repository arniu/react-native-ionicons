import * as React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import { tryGlyph } from './glyph'

/**
 * @typedef {(string|undefined)} IconName
 */

/**
 * @function
 * @param {IconName} android
 * @param {IconName} ios
 * @param {IconName} name
 * @return {string}
 */
const getGlyph = Platform.select({
  ios: (_android, ios, name) => tryGlyph([ios, name], (x) => `ios-${x}`),
  default: (android, _ios, name) => tryGlyph([android, name], (x) => `md-${x}`),
})

class Icon extends React.PureComponent {
  constructor(props) {
    super(props)

    this._setRef = (ref) => {
      this._text = ref
    }
  }

  setNativeProps(props) {
    if (this._text) {
      this._text.setNativeProps(props)
    }
  }

  render() {
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
      color,
    }

    return (
      <Text
        {...textProps}
        style={[fontStyle, style, styles.icon]}
        ref={this._setRef}
      >
        {getGlyph(android, ios, name)}
        {children}
      </Text>
    )
  }
}

Icon.defaultProps = {
  allowFontScaling: false,
  size: 30,
}

export default Icon

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'Ionicons',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
})

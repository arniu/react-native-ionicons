import * as React from 'react'
import { Platform, Text } from 'react-native'
import glyphMap from './glyphmap.json'

function getGlyph (iconName, fallback, active) {
  return ['', iconName, fallback].reduce((prev, name) => {
    if (prev) return prev

    if (name in glyphMap) {
      return glyphMap[name]
    }

    const xs = [name]
    if (Platform.OS === 'ios') {
      xs.unshift('ios')
      if (!active) {
        xs.push('outline')
      }
    } else {
      xs.unshift('md')
    }

    return glyphMap[xs.join('-')]
  })
}

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

    let glyph = getGlyph(Platform.select({ android, ios }), name, active)
    if (typeof glyph === 'number') {
      glyph = String.fromCharCode(glyph)
    }

    const fontStyle = {
      fontFamily: 'Ionicons',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: size,
      color
    }

    props.style = [fontStyle, props.style]
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

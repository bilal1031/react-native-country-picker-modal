import * as React from 'react'
import { Emoji } from './Emoji'
import { CountryCode } from './types'
import { useAsync } from 'react-async-hook'
import {
  Image,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import { useContext } from './CountryContext'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    marginRight: 10,
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  imageFlag: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    opacity: 0.8,
  },
})

interface FlagType {
  countryCode: CountryCode
  withEmoji?: boolean
  withFlagButton?: boolean
  flagSize: number
}

const ImageFlag = React.memo(({ countryCode, flagSize }: FlagType) => {
  const { getImageFlagAsync } = useContext()
  const { loading, result } = useAsync(getImageFlagAsync, [countryCode])

  if (loading || !result) {
    return React.createElement(ActivityIndicator, { size: 'small' })
  }

  return React.createElement(Image, {
    style: [styles.imageFlag, { borderColor: 'transparent', height: flagSize }],
    source: { uri: result },
  })
})

const EmojiFlag = React.memo(({ countryCode, flagSize }: FlagType) => {
  const { getEmojiFlagAsync } = useContext()
  const { loading, result } = useAsync(getEmojiFlagAsync, [countryCode])

  if (loading || !result) {
    return React.createElement(ActivityIndicator, { size: 'small' })
  }

  return React.createElement(
    Text,
    {
      style: [styles.emojiFlag, { fontSize: flagSize }],
      allowFontScaling: false,
    },
    React.createElement(Emoji, { name: result }),
  )
})

export const Flag = React.memo(
  ({
    countryCode,
    withEmoji = true,
    withFlagButton = true,
    flagSize,
  }: FlagType) => {
    if (!withFlagButton) {
      return null
    }

    return React.createElement(
      View,
      { style: styles.container },
      withEmoji
        ? React.createElement(EmojiFlag, {
            countryCode,
            flagSize,
            withEmoji,
            withFlagButton,
          })
        : React.createElement(ImageFlag, {
            countryCode,
            flagSize,
            withEmoji,
            withFlagButton,
          }),
    )
  },
)

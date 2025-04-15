const { getDefaultConfig } = require('expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    assetExts: [...defaultConfig.resolver.assetExts, 'png'],
    sourceExts: ['js', 'json', 'jsx', 'ts', 'tsx'],
  },
  transformer: {
    ...defaultConfig.transformer,
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
}

const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const root = path.resolve(__dirname, '..');
const pak = require('../package.json');

const modules = Object.keys({
  ...pak.peerDependencies,
});

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  projectRoot: __dirname,
  watchFolders: [root],

  // We need to make sure that only one version is loaded for peerDependencies
  // So we block them at the root, and alias them to the versions in example's node_modules
  resolver: {
    blacklistRE: null,
    blockList: [
      // Exclude react and react-native from the SDK's node_modules
      new RegExp(`${path.join(root, 'node_modules', 'react-native').replace(/[/\\]/g, '[/\\\\]')}[/\\\\].*`),
      new RegExp(`${path.join(root, 'node_modules', 'react').replace(/[/\\]/g, '[/\\\\]')}[/\\\\].*`),
    ],

    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    }, {}),

    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(defaultConfig, config);
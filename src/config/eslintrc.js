const {ifAnyDep} = require('../utils');

module.exports = {
  extends: [
    require.resolve('eslint-config-crisfcodes'),
    require.resolve('eslint-config-crisfcodes/import'),
    require.resolve('eslint-config-crisfcodes/jest'),
    require.resolve('eslint-config-crisfcodes/promise'),
    require.resolve('eslint-config-crisfcodes/comments'),
    require.resolve('eslint-config-crisfcodes/filenames'),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/jsx-a11y')),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/react')),
    ifAnyDep(
      ['react-native', 'expo'],
      require.resolve('eslint-config-crisfcodes/react-native'),
    ),
  ].filter(Boolean),
  rules: {},
};

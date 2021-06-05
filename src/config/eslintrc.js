const {ifAnyDep} = require('../utils')

module.exports = {
  extends: [
    require.resolve('eslint-config-crisfcodes'),
    require.resolve('eslint-config-crisfcodes/jest'),
    require.resolve('eslint-config-crisfcodes/promise'),
    require.resolve('eslint-config-crisfcodes/comments'),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/jsx-a11y')),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/react')),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/react-native')),
  ].filter(Boolean),
  rules: {},
}

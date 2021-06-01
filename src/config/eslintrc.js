const {ifAnyDep} = require('../utils')

module.exports = {
  extends: [
    require.resolve('eslint-config-crisfcodes'),
    require.resolve('eslint-config-crisfcodes/jest'),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/jsx-a11y')),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/react')),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/promise')),
    ifAnyDep('react', require.resolve('eslint-config-crisfcodes/comments')),
  ].filter(Boolean),
  rules: {},
}

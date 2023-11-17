import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'node/prefer-global/process': 'off',
    'unused-imports/no-unused-vars': 'warn',
  },
})

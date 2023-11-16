// .eslintrc.cjs

module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    semi: 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'require-await': 'off',
    eqeqeq: 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['Home']
    //   }
    // ],
    // 'vue/valid-v-slot': [
    //   'error',
    //   {
    //     allowModifiers: true
    //   }
    // ],
    // 'no-undef': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'warn'
  },
};

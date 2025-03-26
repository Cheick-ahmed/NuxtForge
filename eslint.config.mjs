import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import align from 'eslint-plugin-align-assignments'
import perfectionist from 'eslint-plugin-perfectionist'
import unused from 'eslint-plugin-unused-imports'

export default createConfigForNuxt({
  features: {
    stylistic: {
      commaDangle: 'always-multiline',
    },
    tooling: true,
  },
}).prepend({
  plugins: {
    perfectionist,
    'align-assignments': align,
    'unused-imports': unused,
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // @ts-expect-error
    'align-assignments/align-assignments': ['warn', { requiresOnly: false }],

    'perfectionist/sort-imports': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
    'perfectionist/sort-objects': [
      'warn',
      {
        type: 'asc',
        order: 'natural',
        minKeys: 3,
      },
    ],

    'unused-imports/no-unused-imports': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
})

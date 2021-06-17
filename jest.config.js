module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/unit/custom-matchers.js'],
  testMatch: ['**/(*.)test.js'],
  setupFiles: ['<rootDir>/tests/unit/setup.js'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/main.js',
    '!src/api.js',
    '!src/assets/pokemon-types',
    '!src/router/index.js',
    '!src/store/index.js',
    '!src/Service.js',
  ],
}

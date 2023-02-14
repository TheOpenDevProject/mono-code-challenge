// jest.config.js

const tsPreset = require('ts-jest/presets');

module.exports = {
  ...tsPreset.defaults,
  moduleDirectories: ['node_modules', 'src', 'tests', 'mocks', 'jest'],
  testPathIgnorePatterns: ['node_modules/', 'build/', 'dist/', 'cypress/'],
  testTimeout: 10000,
  reporters: ['@scylla-digital/rush-jest-reporter'],
  displayName: {
    name: '@scylla-digital/nest-jwt-utilities',
    color: 'blue',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

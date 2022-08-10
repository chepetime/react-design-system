module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testURL: 'http://localhost/',
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}

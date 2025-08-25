module.exports = {
   preset: 'ts-jest',
   transform: {
       "^.+\\.tsx?$": "ts-jest"
    },
   clearMocks: true,
   testEnvironment: 'jsdom',
   coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
   moduleDirectories: ['node_modules'],
   modulePaths: ['<rootDir>src'],
   testMatch: [
       '**/tests/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)'
   ],
   moduleNameMapper: {
        '^.+\\.module\\.css$': 'identity-obj-proxy',
    },
   rootDir: './',
   transformIgnorePatterns: ['node_modules/(?!axios)'],
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}
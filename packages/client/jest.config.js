import dotenv from 'dotenv'
import fetch from 'cross-fetch';

dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    fetch: fetch
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
  },
}

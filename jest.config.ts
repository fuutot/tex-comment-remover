import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // tsconfig の paths に対応
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;

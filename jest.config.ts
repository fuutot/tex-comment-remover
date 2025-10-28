import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // tsconfig の paths に対応
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;

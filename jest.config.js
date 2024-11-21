/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // tsx, ts 파일을 ts-jest로 변환
  },
  transformIgnorePatterns: [
    "/node_modules/(?!some-package-to-transform)/", // TypeScript 변환을 할 패키지 지정
  ],
};

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(tsx|ts)$": "ts-jest", // TypeScript 파일을 ts-jest로 변환
    "^.+\\.(jsx|js)$": "babel-jest", // JSX, JS 파일을 babel-jest로 변환
  },
  transformIgnorePatterns: [
    "/node_modules/(?!some-package-to-transform)/", // 변환을 할 패키지 지정
  ],
};

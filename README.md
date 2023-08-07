# 프로젝트 1주차 KREAM 클론

## 폴더 컨벤션

- 도메인(기능) 별로 폴더 생성
- 임시 mock data를 위한 data들은 {도메인}.data.js
- style-components의 파일 명은 {도메인}.style.js
  - 그 후 as S로 import 할 때
- 폴더는 무조건 소문자로만 EX => pages
- 컴포넌트 파일은 무조건 PascalCase Ex => Todo.jsx

## 코드,변수 컨벤션

- 주석은 /\*\* \*/ 사용(마우스 커서만 대도 알 수 있게)
- .env, api, key는 무조건 대문자로만
- 함수명은 camelCase
- 컴포넌트, 생성자 함수, Class는 PascalCase

## 커밋 컨벤션

- 기능별로 커밋(최대한 상세히)
- pull request시에는 팀원들과 이야기
- 기능 추가 feat #이슈번호 :
- 스타일 style #이슈번호 :
- 수정 fix #이슈번호 :
- 삭제 delete #이슈번호 :
- 문서관련 docs #이슈번호 :
- 테스트 test #이슈번호 :

## git branch 전략

- Github Flow
- devMain에서 기능별 브랜치 생성 -> pr후 삭제
- [참고](https://hudi.blog/git-branch-strategy/)

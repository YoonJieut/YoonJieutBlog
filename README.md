# 윤지읒의 포트폴리오 프로젝트

설명 notion 링크 : [준비 중]

커맨드를 통해 엔트리하며, 메인 포트폴리오 사이트와 관리자로 접근했을 때는 관리자 전용 페이지가 나온다. (현재는 모두 공개)

사용자 측면을 고려한 로딩 환경을 구현해보았고, 추후에 animation 등 클릭을 유도하는 등의 모션에 대한 연구과제가 남아있다.

컨셉 : 미니멀 | 정렬과 간격, 기본기를 다질 수 있다.

시스템 : router 형식 | nextjs의 작성법과 react의 동작 방식, 사용법에 대해 익히며 ui 생성과정에 대해 익숙해질 수 있다.

## 주요 관점

[페이지 넘김(app router 활용 방안) 관련 ui] - ui 관련한 것은 Atomic Design을 참고하여 컴포넌트를 쪼개보는 연습을 한다.

[스크롤 방식(main 브랜치 | 스크롤 활용 방안) 관련 ui] - page에 따라 ui 컴포넌트를 저장, 현재는 상태

[리터럴 추출 작업] - \_contant 파일안에 ~Message.json 혹은 ts를 활용하여 모듈을 불러오고 관리에 용이하게 설계 및 리펙토링한다.

[애니메이션 직접 구현] - 애니메이션을 직접 구현함으로서, 커스텀 훅과 자바스크립트의 기초를 다진다. path, css animation, 이벤트 버블링 등의 이슈가 있었다.

[데이터 핸들링] - DB 연동으로 게시물 또는 데이터를 기본적인 crud 단계에서 구성했다.

[정보 보안] - .env로 개인 정보를 구분하고, 크롤링 되지 않도록, 자주 등장하는 footer의 개인 정보는 사진으로 대채해보았다.

[아키텍쳐] - DB와 연동하는 라우트 함수는 커스텀 서버 기능(express)을 활용하여 next의 api를 활용하지 않고 구성해보았다.

[디자인 기본 학습] - figma을 활용한 설계, 여러 레퍼런스를 보고 직접 html로 작성해보며 디자인의 안목도 높힐 수 있도록 노력하였다.

## 작업 정보

```
기본 브랜치 : main
```

```
npm install
npm run nextDev 혹은 npm run nextBuild && npm run start
```

---

## 테스트 커맨드 정리

### 포스트 조회 API 테스트

```
Invoke-RestMethod -Uri "http://localhost:3000/api/posts/10" -Method GET
```

### 포스트 등록 API 테스트

안될 때는 이와 같이 Json으로 바꾸는 명령어를 작성하도록 한다.

```
$body = @{
    title = "test title"
    content = "test content"
    authorId = 1
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/posts" -Method POST -Body $body -ContentType "application/json; charset=utf-8"
```

### 포스트 수정 API 테스트

필수 : title, content, postId

```
$body = @{
  title = "updated title"
  content = "updated content 자 한글은 될까?"
  postId = "10"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/posts/10" -Method PATCH -Body $body -ContentType "application/json; charset=utf-8"

```

### 포스트 삭제 API 테스트

```
Invoke-RestMethod -Uri "http://localhost:3000/api/posts/10" -Method DELETE
```

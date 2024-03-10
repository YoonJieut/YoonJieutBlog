# 윤지읒의 개인 블로그 프로젝트

커맨드를 통해 엔트리하며, 메인 포트폴리오 사이트와 관리자로 접근했을 때는 관리자 전용 페이지가 나온다.

사용자 측면을 고려한 로딩 환경을 구현해보았고, 추후에 animation 등 클릭을 유도하는 등의 모션에 대한 연구과제가 남아있다.

현재 다양한 경험을 위해 디자인에 대한 연구를 하는 중


컨셉 : 미니멀 | 정렬과 간격, 기본기를 다질 수 있으며 나의 성향과 가장 닮았다.


시스템 : router 형식 | nextjs의 작성법, 사용법에 대해 익히며 ui 생성과정에 대해 익숙해질 수 있다.


구조 :

[페이지 넘김(routerOnly 브랜치 | router 활용 방안) 관련 ui] - ui 관련한 것은 Atomic Design을 참고하여 컴포넌트를 쪼개보는 연습을 한다.

[스크롤 방식(main 브랜치 | 스크롤 활용 방안) 관련 ui ] - page에 따라 ui 컴포넌트를 저장


## 현재 작업 관련 내용

```
작업 중인 브랜치 : mergeTest
```

```
npm install
npm run dev
```

## 개발 목표

- **기본 목표**:
  2일 내에 JavaScript와 Node.js를 기반으로 하는 Express 서버와 함께 Next.js 프론트엔드를 사용하여 CRUD 기능을 갖춘 블로그 플랫폼의 스켈레톤을 구축합니다.
  이 초기 버전은 사용자가 블로그 포스트를 생성, 조회, 수정, 삭제할 수 있는 기본적인 기능을 포함합니다.
- **중기 목표**:
  5일 내에 사용자 인증 기능을 추가하고, 전체 애플리케이션을 AWS Elastic Beanstalk을 통해 배포합니다. 이 과정에서 AWS RDS를 사용하여 MySQL 데이터베이스를 설정하고 관리합니다.
- **장기 목표**:
  1주일 후에는 Express 기반의 백엔드를 Django로 전환하여 Python 및 Django의 강력한 백엔드 기능을 활용합니다.
  추가적으로, 사용자 인터페이스를 개선하고, 챗봇 기능을 포함시켜 사용자 경험을 향상시키는 것을 목표로 합니다.

## 기술 스택 선정

| 구분         | 초기 및 중반                             | 후반(추후 완성 목표)                           |
| ------------ | ---------------------------------------- | ---------------------------------------------- |
| 프론트엔드   | Next.js                                  | Next.js (변경 없음)                            |
| 백엔드       | Express                                  | Django                                         |
| 데이터베이스 | MySQL (AWS RDS)                          | MySQL (AWS RDS, Django ORM 사용)               |
| 배포         | AWS Elastic Beanstalk, AWS RDS for MySQL | AWS Elastic Beanstalk, AWS RDS for MySQL       |
| 추가 기능    | -                                        | 챗봇 기능 (Python 오픈소스 AI 라이브러리 활용) |

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

---

### 포스트 삭제 API 테스트

```
Invoke-RestMethod -Uri "http://localhost:3000/api/posts/10" -Method DELETE
```

### 기존 레이아웃 브랜치 만들어보기

```
브랜치 이름 : routeOnly / mergeDone
```

#### 생성 컴포넌트

1. minimal footer [done : mainTest layout.tsx]

2. 자기소개 ui [done : mainTest/introduce page.tsx]

3. 인적사항 ui [done : mainTest/aboutme page.tsx]\

   3-1. 스택 list [done : ui/Molecules PfList.tsx]

4. 작업물 목록 [ done : mainTest/portfolio page.tsx]

   4-1. 포폴 요약 컴포넌트 [ done : ui/Temp PortfolioTemp.tsx]

   4-2. 작은 스택 ui [done : ui/Molecules StackOuter.tsx]

### 테스트 layout 작성

```
/layoutTest/ blur.html, minimal.html ...
```

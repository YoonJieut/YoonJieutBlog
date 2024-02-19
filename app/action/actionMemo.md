# NextJs action 컴포넌트 공부 메모

서버 사이드 컴포넌트의 생성

## "use server"

인라인이든 서버든 모든 레벨에서 활용 가능한 "use server" 선언

### 사용법

속성을 action으로 하면 인라인에서 함수로 추출한다.

```
<form action ={updateSomething}> {* ... *} </form>
```

### 저장 디렉토리

```
@/app/actions/...
```

### action.ts

서버 사이드에서 비동기 함수로 양식제출과 데이터 변형을 처리하는 action.ts를 활용해볼 수 있을까?

서버작업을 컴포넌트화 할 수 있다라는 가능성을 가질 수 있다.
조금더 조사할 필요가 있다.

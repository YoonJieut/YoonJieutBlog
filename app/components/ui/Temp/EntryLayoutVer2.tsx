import { EntryInput } from "./EntryInput";

const EntryLayoutVer2 = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-start overflow-hidden p-4 gap-20">
      <EntryInput />
      <div className="font-thin font-serif self-start opacity-50">
        <p className="font-thin font-serif">해당 페이지는 수정 중입니다.</p>
        <p className="font-thin font-serif">
          관리자 페이지 커맨드 : test, admin, 관리자
        </p>
        <p className="font-thin font-serif">
          아무키나 입력하면 메인 포트폴리오 페이지로 접근합니다.
        </p>
      </div>
      <div>
        <p>
          반갑습니다. <br />
          윤준현의 포트폴리오 페이지에 오신 것을 환영합니다.
          <br />
          저는 프론트엔드를 공부하고 있습니다.
        </p>
      </div>
    </main>
  );
};
export default EntryLayoutVer2;

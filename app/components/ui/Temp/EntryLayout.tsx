import { CustomInputArea } from "../Molecules/FetchInput/CustomInputArea";

const EntryLayout = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-end items-center overflow-hidden p-4">
      <div className="font-thin font-serif self-start opacity-50">
        <p className="font-thin font-serif">해당 페이지는 수정 중입니다.</p>
        <p className="font-thin font-serif">
          관리자 페이지 커맨드 : test, admin, 관리자
        </p>
        <p className="font-thin font-serif">
          아무키나 입력하면 메인 포트폴리오 페이지로 접근합니다.
        </p>
      </div>
      <CustomInputArea />
    </main>
  );
};
export default EntryLayout;

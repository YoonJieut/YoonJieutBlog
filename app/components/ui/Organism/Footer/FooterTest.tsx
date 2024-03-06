"use client";
import TextLogo from "../../testUi/TextLogo";

const FooterTest: React.FC = () => {
  return (
    <footer className="w-full h-1/12 OutLine flex">
      <div className="h-full w-2/12 flex flex-col">
        <p>Web</p>
        <p>Developer</p>
      </div>
      <div className="h-full w-2/12 flex flex-col">
        <TextLogo />
      </div>
      <div className="h-full w-4/12 flex flex-col leading-5">
        {/* todo : 스크롤 메뉴 속성을 추가해야함 */}
        <p>home</p>
        <p>introduce</p>
        <p>portFolio</p>
        <p>blog</p>
      </div>
      <div className="h-full w-1/12 flex flex-col leading-5">
        <h5>EMAIL</h5>
        <h5>GITHUB</h5>
        <h5>INFO</h5>
      </div>
      <div className="h-full w-3/12 flex flex-col leading-5">
        {/* todo : 드래그를 막도록 수정 */}
        {/* issue : 왜 드래그 막기가 안될까? */}
        <h5 draggable="false">yoonjieut@gmail.com</h5>
        <h5 draggable="false">https://github.com/YoonJieut</h5>
        {/* 링크로 처리 */}
        <h5 draggable="false">About Me</h5>
      </div>
    </footer>
  );
};

export default FooterTest;

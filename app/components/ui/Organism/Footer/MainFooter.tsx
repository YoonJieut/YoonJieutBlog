"use client";
import Link from "next/link";
import Image from "next/image";

const MainFooter: React.FC = () => {
  return (
    <footer className="w-full h-1/12 OutLine flex bg-d1 text-[12px] font-39 leading-4">
      <div className="h-full w-2/12 flex flex-col ">
        <p>Web</p>
        <p>Developer</p>
      </div>
      <div className="h-full w-2/12 flex flex-col"></div>
      <div className="h-full w-4/12 flex flex-col ">
        {/* todo : 스크롤 메뉴 속성을 추가해야함 */}
        <Link href="/main" className="hover:underl</div>ine">
          home
        </Link>
        <Link href="/introduce" className="hover:underline">
          introduce
        </Link>
        <Link href="/portfolio" className="hover:underline">
          portFolio
        </Link>
        <Link href="/blog" className="hover:underline">
          posts
        </Link>
      </div>
      <div className="h-full w-1/12 flex flex-col">
        <h5>EMAIL</h5>
        <h5>GITHUB</h5>
        <h5>INFO</h5>
      </div>
      <div className="h-full w-3/12 flex flex-col">
        <div
          className="aboutmeImg pt-1"
          onClick={() => {
            console.log("hi");
            // window.location.href = "/aboutme";
          }}
        >
          <Image
            src="/images/contactMe.png"
            alt="contact me, 개발자 윤지읒에 대한 정보가 담겨 있습니다. 클릭하면 aboutme 페이지로 넘어갑니다."
            width={160}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;

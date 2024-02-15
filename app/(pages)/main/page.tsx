"use client";
import ImgCard from "@/app/components/ui/ImgCard";
import ViewMoreBtn from "@/app/components/ui/ViewMoreBtn";
import GithubBtn from "../../components/ui/GithubBtn";
// 모달버튼은 이벤트를 전달할 때, 부모 client 컴포넌트로 교체해야 한다.

export default function MainPage() {
  return (
    <>
      <div className="twoCardLayout flex space-x-2 justify-between px-2 w-full">
        <ImgCard
          imgUrl="/images/textCursor.png"
          imgTitle="Lorem Ipsum"
          imgSub="안녕하세요 반갑습니다."
          imgWidth={400}
          imgHeight={300}
          className="w-1/3"
        />
        <ImgCard
          imgUrl="/images/textCursor.png"
          imgTitle="Lorem 2"
          imgSub="이건 저의 무언가입니다."
          imgWidth={500}
          imgHeight={500}
          className="w-2/3"
        />
      </div>
      <div className="oneCardLayout w-full h-96 flex space-x-2 justify-center overflow-x-hidden ">
        {/* <ImgCard
          imgUrl="/images/textCursor.png"
          imgTitle="Lorem 2"
          imgSub="이건 저의 무언가입니다."
          imgWidth={1100}
          imgHeight={1100}
        /> */}
      </div>
      {/* <ViewMoreBtn
        onClick={() => {
          console.log("hello world입니다ㅏㅏㅏ");
        }}
      />
      <GithubBtn /> */}
    </>
  );
}

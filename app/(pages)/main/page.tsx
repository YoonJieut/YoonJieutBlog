"use client";
import ImgCard from "@/app/components/ui/ImgCard";
import ViewMoreBtn from "@/app/components/ui/ViewMoreBtn";
import GithubBtn from "../../components/ui/GithubBtn";
// 모달버튼은 이벤트를 전달할 때, 부모 client 컴포넌트로 교체해야 한다.

export default function MainPage() {
  return (
    <>
      <ImgCard imgUrl="/images/textCursor.png" imgTitle="dksd" imgSub="sub" />
      <ViewMoreBtn
        onClick={() => {
          console.log("hello world입니다ㅏㅏㅏ");
        }}
      />
      <GithubBtn />
    </>
  );
}

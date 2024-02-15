"use client";
import ImgCard from "@/app/components/ui/ImgCard";
import ViewMoreBtn from "@/app/components/ui/ViewMoreBtn";
import GithubBtn from "../../components/ui/GithubBtn";
// 모달버튼은 이벤트를 전달할 때, 부모 client 컴포넌트로 교체해야 한다.

export default function MainPage() {
  return (
    <>
      <div className="introduceText flex flex-col space-y-10 py-20">
        <h1 className="text-3xl font-bold">
          안녕하세요, 저는 이런 사람입니다.
        </h1>
        {Array(15)
          .fill("")
          .map((_, index) => (
            <p key={index} className="text-lg">
              내용 {index + 1}
            </p>
          ))}
      </div>
      <section className="twoCardLayout flex space-x-2 justify-between w-full">
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
          imgWidth={700}
          imgHeight={500}
          className="w-2/3"
        />
      </section>
      <section className="textArea w-full h-28 flex items-center justify-center">
        <p className="opacity-50">
          여기에 내가 하고 싶은 말을 마음껏 하면 어떨까?
        </p>
      </section>
      <section className="oneCardLayout w-full flex flex-col space-y-10 justify-center ">
        <ImgCard
          className="w-full"
          imgUrl="/images/textCursor.png"
          imgTitle="나를 표현할 수 있는 무언가"
          imgSub="이건 저의 무언가입니다."
          imgWidth={400}
          imgHeight={500}
        />
        <div className="btnArea flex space-x-20 justify-end">
          <ViewMoreBtn
            onClick={() => {
              console.log("hello world입니다ㅏㅏㅏ");
            }}
          />
          <GithubBtn />
        </div>
      </section>
    </>
  );
}

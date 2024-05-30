import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";
import UnderBarAni from "@/app/components/animation/UnderBarAni";
import Link from "next/link";

export default function ChatnovelContent() {
  return (
    <>
      <div className="entryPart flex flex-col gap-20">
        {/* 메인 이미지 모습 */}
        <div className="w-full">
          <ImgCard
            imgUrl="/images/chat_main.png"
            imgAlt="메인 이미지 모습"
            imgTitle="분기 화면의 모습"
            fill={true}
            className="protoType-ImgCard h-[400px] w-full"
          />
        </div>
        {/* 사용된 스택과 링크 */}
        <div className="w-full flex justify-between">
          <TextAlign title="사용된 스택과 링크" type="left">
            <p>스택 : JavaScript, EXPRESS, HTML, CSS</p>
            <p>의의 : 협업 , Next.JS , DB</p>
            <p>
              설계와 기획 팀 협업 툴 : Notion ,{" "}
              <Link href={"https://github.com/YoonJieut/Metro2033-ownPath"}>
                <UnderBarAni>Github</UnderBarAni>
              </Link>
            </p>
            <p>
              개인 노션 링크 :{" "}
              <Link
                href={
                  "https://resilient-aster-1dc.notion.site/CHAT-NOVEL-fd742ec0ea9e465bb6fc8704b6733e1d?pvs=4"
                }
              >
                <UnderBarAni>윤준현 - Metro2033-ownPath</UnderBarAni>
              </Link>
            </p>
          </TextAlign>
          {/* 이미지 자리 */}
          <ImgCard
            imgUrl="/images/chat_nextWork.png"
            imgAlt="다음 로직 이미지"
            imgTitle="클릭 시 소설의 대사가 나온다."
            imgWidth={380}
            imgHeight={260}
            className="protoType-ImgCard"
          />
        </div>
      </div>
      {/* 중앙 텍스트 */}
      <div className="w-full flexCenter">
        <TextAlign title="" type="center">
          <p className="m-0">
            <span>{`작은 프로젝트를 통해서 `}</span>
            <b>DOM API를 활용한 스타일링과 태그 생성</b>
          </p>
          <p className="m-0">
            <span>{`그리고 추후에는 `}</span>
            <b>Closure 패턴</b>
            <span>{`과 `}</span>
            <b>직접 만든 함수</b>
            <span>를 활용해보는 연습을 할 수 있었습니다.</span>
          </p>
        </TextAlign>
      </div>
      {/* 오른쪽 정렬 */}
      <div className="useHobby w-full flex justify-between">
        {/* 이미지 카드 위치 */}
        <ImgCard
          imgUrl="/images/chat_protoType.png"
          imgAlt="프로토타입 이미지"
          imgTitle="익숙하지 않은 프로토타입"
          imgWidth={320}
          imgHeight={280}
          className="protoType-ImgCard"
        />
        <TextAlign title="취미 활용하기" type="right">
          <p className="m-0">
            <b>새로운 취미인 소설을 분기를 표현할 수 있도록 프로젝트</b>
          </p>
          <p className="m-0">
            <b>&nbsp;</b>
          </p>
          <p className="m-0">{`이 프로젝트로 DB의 개념와 직접 함수를 작성해보며 JS의 작성법과 모듈화의 개념에 대해 공부하였습니다. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <b>개인적인 도전</b>
            <span>{`으로, 학습과 프로젝트 진행까지, `}</span>
          </p>
          <p className="m-0">
            <span>{`여러 일을 병행하는 방법, `}</span>
            <b>그에 따른 저를 관찰</b>
            <span>{`할 수 있었습니다. `}</span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            처음에는 공부 후 개발해야 된다는 고정관념이 있었으나,
          </p>
          <p className="m-0">
            <b>만들면서 학습할 수 있다는 것</b>
            <span>을 배울 수 있었습니다.</span>
          </p>
        </TextAlign>
      </div>
      {/* 왼쪽 정렬 - 바닐라로 시도 */}
      <div className="tryVanila w-full flex justify-between">
        <TextAlign title="React를 바닐라로 시도" type="left">
          <div style={{ width: "100%", height: "100%" }}>
            <p>
              REACT의 원리에 대한 이해를 하기 위해 <br />
              DOM API 요소들을 건드리면서 내가 효율적으로 공부하는 방식은
              <br />
            </p>
            <p>
              <b>취미인 책</b>
              <span>과 눈에 잘 보이는 </span>
              <b>챗형식</b>
              <span>
                의 작은 어플리케이션을 <br />
                만드는 것으로 시작하게 되었습니다.
              </span>
            </p>
          </div>
        </TextAlign>
        {/* 이미지 자리 */}
        <ImgCard
          imgUrl="/images/chat_manyStudy.png"
          imgAlt="노션 연구자료 이미지"
          imgSub="연구의 흔적들"
          imgWidth={385}
          imgHeight={214}
          className="protoType-ImgCard"
        />
      </div>
      {/* 이미지를 통한 코드 제공 */}
      <div className="closure w-full flex justify-between">
        {/* z클로저 패턴으로 상태개념 익히기 */}
        <ImgCard
          imgUrl="/images/chat_closure.png"
          imgAlt="클로저 패턴 이미지"
          imgTitle="클로져 패턴으로 상태 개념 익히기"
          imgWidth={225}
          imgHeight={318}
          className="closure-ImgCard"
        />
        {/* 창의적인 코드가 멋진 줄 */}
        <ImgCard
          imgUrl="/images/chat_mainLogic.png"
          imgAlt="클로저 패턴을 활용한 매인 로직 이미지"
          imgTitle="배열 인덱스를 Closure로 관리"
          imgSub="복잡한 코드가 멋진 줄... "
          imgWidth={440}
          imgHeight={531}
          className="closure-ImgCard"
        />
      </div>
      {/* 중앙 정렬 - 창의적인 코드 */}
      <div className="mainLogicSub w-full flex flex-col flexCenter">
        {/* <H1 text="창의적인 코드" /> */}
        <TextAlign title="창의적인 코드" type="center">
          <p>
            객체만 들어있는 js 파일과 async 비동기 코드와 이름을 배열로 둔
            이상한 코드
          </p>
          <p>
            반복문 돌리면 될 것을 가끔은 엉뚱한 로직을 짜고 뿌듯해하는 자신을
            발견하곤 했습니다.
          </p>
          <p>그 당시엔 멋진 줄 알았고, 나름의 연구과제였습니다</p>
        </TextAlign>
      </div>
      {/* 왼쪽 정렬 - 결론 */}
      <div className="Study w-full pb-10">
        <TextAlign title="STUDY" type="left">
          <p>
            새로운 취미인 <b>소설을 분기를 표현할 수 있도록 프로젝트</b>를
            진행했습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            처음에는 공부 후 개발해야 된다는 고정관념이 있었으나, <br />
            만들면서 학습할 수 있다는 것을 배울 수 있었습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            이를 통해 저는 개발자 생활과 개발과 학습의 병행이 가능하다.
            <br />
            <b>만드는 것이 공부가 될 수 있다는 것에 대해 이해하는 시간</b>
            이었습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            이 프로젝트로 <b>DB의 개념</b>와 <b>직접 함수</b>를 작성해보며
            <b>JS의 작성법과 모듈화</b>의 개념에 대해 공부하였습니다. 개인적인
            도전으로, 학습과 프로젝트 진행까지, 여러 일을 효과적으로 병행하는
            방법에 대해 연구하고, 자신이 아니라 윤준현 이라는{" "}
            <b>객관화의 중요성</b>에 대해 알 수 있었습니다.
          </p>
        </TextAlign>
      </div>
    </>
  );
}

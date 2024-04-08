import Image from "next/image";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import Section from "@/app/components/ui/Atom/Basic/Section";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import Div from "@/app/components/ui/Atom/Basic/Div";
import StackOuter from "@/app/components/ui/design/StackOuter";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";

// todo arrowbtn에 들어갈 기능 추가
//  pfRightSection에 내용 추가
export default function YoonJieutPage() {
  return (
    <div className="w-full h-11/12 flex Tesing">
      <Section className="portfolioLeftSection w-1/2 h-full">
        <ArrowBtns />
        <Div className="flex flex-col gap-2">
          <H1 text="YOONJIEUT" className="koulen font-normal text-8xl" />
          <Div className="StackFlexBox flex space-x-2 ">
            <StackOuter divClassName="rounded-full">TypeScript</StackOuter>
            <StackOuter divClassName="rounded-full">NextJS</StackOuter>
            <StackOuter divClassName="rounded-full">Express</StackOuter>
          </Div>
        </Div>
      </Section>
      <Section className="portfolioRightSection w-1/2 Testing flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll text-[0.875rem] leading-[120%]">
        {/* 메인 이미지 모습 */}
        <div className="EntryPart w-full">
          <ImgCard
            imgUrl="/images/erp_mainpage.png"
            imgAlt="메인 이미지 모습"
            imgTitle="ERP의 메인 페이지"
            imgWidth={950}
            imgHeight={440}
            className="mainPage-ImgCard"
          />
        </div>
        {/* 사용된 스택과 링크 */}
        <div className="w-full flex justify-between">
          <TextAlign title="사용된 스택과 링크" type="left">
            <p>{`스택 : TPYESCRIPT, NEXT.JS, EXPRESS, MySQL `}</p>
            <p className="m-0 whitespace-pre-wrap">{`의의 : 개인 블로그의 초석을 통한 성장, CRUD 학습, 디자인 공부`}</p>
            <p>툴 : Notion, Github, Figma</p>
            <p>&nbsp;</p>
            <p>
              {`개인 노션 링크 : `}
              <a
                className="whitespace-pre-wrap"
                href="https://resilient-aster-1dc.notion.site/ERP-63d8c0f6651e4808a677791431d18c61?pvs=4"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  윤준현 - 포트폴리오 사이트
                </span>
              </a>
            </p>
            <p>
              {`팀 노션 링크 : `}
              <a
                className="whitespace-pre-wrap"
                href="/FORM-8bb1a4092ee34bab83f8dbd0077fa943?pvs=24"
                target="_blank"
              >
                <span className="[text-decoration:underline]">개인 피그마</span>
              </a>
            </p>
            <p>
              {`피그마 : `}
              <a
                className="whitespace-pre-wrap"
                href={`https://www.figma.com/file/5KDz54ixEJir3fd9V6fJ1L/ERP-DB?type=whiteboard&node-id=0-1`}
                target="_blank"
              >
                <span className="[text-decoration:underline]">ERP DB</span>
              </a>
              {` , `}
              <a
                className="whitespace-pre-wrap"
                href={`https://www.figma.com/file/2lrzpae0BKnkLMTZgJSjgY/Wireframe?type=design&node-id=37-41&mode=design`}
                target="_blank"
              >
                <span className="[text-decoration:underline]">Wireframe</span>
              </a>
            </p>
          </TextAlign>
        </div>
        {/* 중앙 정렬 */}
        <div className="w-full flexCenter">
          <TextAlign title="" type="center">
            <p>
              <b>개인적인 도전으로 독립심과 주관</b>을 갖기 위해{" "}
              <b>“나만의 디자인을 표현”</b>한 프로젝트입니다.
              <br />
              <b>기능</b>으로는 <b>간단한 CRUD 작업</b>과 <b>피그마 활용</b>를
              중점으로 작업하였습니다.
            </p>
          </TextAlign>
        </div>
        {/* 오른 정렬 - 주관갖기 어려운 신입 */}
        <div className="w-full flex justify-between items-start">
          <ImgCard
            imgUrl="/images/pf_before.png"
            imgAlt="이전 웹 퍼블리셔 과정에 준비하던 pf 이미지가 담겨있습니다."
            imgTitle="이미지 이전 포트폴리오 사이트"
            imgSub="흔한 레이아웃"
            imgWidth={300}
            imgHeight={240}
          />
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            <p>
              <b>기술이란 결국 작성법</b>
              <br />
              바르게 성장하기 위해서는 자신에 대한 연구가 필요합니다.
            </p>
            <p>&nbsp;</p>
            <p>
              성숙하고 자립심있는 개발자의 첫걸음이
              <br />
              무엇보다 중요하다고 생각했습니다.
            </p>
            {/* <p className="mt-2">
              이전과 다른 도전을 위해 모든 것을 갈아 엎었습니다.
            </p> */}
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 - 혼란의 과정 */}
        <div className="w-full flex justify-between items-start">
          <TextAlign title="주관 갖기 어려운 신입" type="left">
            내용
          </TextAlign>
          <ImgCard
            imgUrl="/images/pf_second.png"
            imgAlt="첫번 째로 만든 레퍼런스들과 레이아웃 사진이 담겨있습니다."
            imgSub="화려한 인터렉션 중심 스크롤 레이아웃"
            imgWidth={360}
            imgHeight={360}
          />
        </div>
        {/* 중앙 정렬 - 윤준현 연구 */}
        <div className="w-full flexCenter">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 오른 정렬 - 근거는 과거의 자신 */}
        <div className="w-full flex justify-between items-start">
          <ImgCard
            imgUrl="/images/pf_banner.png"
            imgAlt="과거의 저의 흔적에서 취향을 발견함을 표현하기 위한 이미지가 담겨있습니다."
            imgTitle="과걱의 작업에 힌트가 있었습니다."
            imgWidth={160}
            imgHeight={312}
          />
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 - 확신은 디자인 연구 */}
        <div className="w-full flex justify-between items-start">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
          <ImgCard
            imgUrl="/images/pf_pontana.png"
            imgAlt="저에게 큰 영감을 주었던 루이초 폰타나의 공간개념이라는 작품 사진이 들어있습니다. 캔버스 가운데 칼로 그어 구멍을 냈습니다."
            imgSub="루이초 폰타나 <공간개념, 기다림..>"
            imgWidth={250}
            imgHeight={250}
          />
        </div>
        {/* 이미지 정렬 - 과거 흔적 */}
        <div className="w-full flex justify-between items-start">
          {/* 이미지 노력 */}
          <ImgCard
            imgUrl="/images/pf_practice.png"
            imgAlt="레이아웃을 실제로 그리고 재밌게 하기 위해 웃긴 사진들과 노션에 정리하던 이미지가 담겨있습니다."
            imgTitle="연습 작업"
            imgSub="분야는 가리지 않았습니다."
            imgWidth={300}
            imgHeight={170}
          />
          {/* 이미지 수기 */}
          <ImgCard
            imgUrl="/images/pf_pencil.png"
            imgAlt="pf 디자인을 위해 수많은 레이아웃을 연필이나 수기로 그린 사진이 담겨 있습니다."
            imgSub="직접 그리며 볼 수 밖에 없었습니다."
            imgWidth={530}
            imgHeight={260}
          />
        </div>
        {/* 나만의 결론 - 전체 이미지 */}
        <div className="w-full h-3/5 flex flex-col gap-12">
          <div className="w-full flexCenter">
            <TextAlign title="나만의 결론 내기" type="center">
              내용
            </TextAlign>
          </div>
          {/* 이슈 - 이미지가 꽉 안차는 문제 발견 */}
          <div className="w-full relative h-[500px]">
            <Image
              src="/images/pf_figma.png"
              alt="test"
              priority={true}
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* <ImgCard
            imgUrl="/images/pf_figma.png"
            imgAlt="이전 웹 퍼블리셔 과정에 준비하던 pf 이미지가 담겨있습니다."
            imgTitle="이미지 이전 포트폴리오 사이트"
            imgSub="흔한 레이아웃"
            fill={true}
          /> */}
        </div>
        {/* 오른 정렬 - 아쉬운 점 */}
        <div className="w-full flex justify-end">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 - 의의와 결론 */}
        <div className="w-full flex justify-between items-start">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
      </Section>
    </div>
  );
}

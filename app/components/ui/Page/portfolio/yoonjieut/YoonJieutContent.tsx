import UnderBarAni from "@/app/components/animation/UnderBarAni";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";

export default function YoonJieutContent() {
  return (
    <>
      <div className="entryPart flex flex-col gap-20">
        {/* 메인 이미지 모습 */}
        <div className="EntryPart w-full">
          <ImgCard
            imgUrl="/images/pf_main.png"
            imgAlt="메인 이미지 모습"
            imgTitle="Yoonjieut 포트폴리오의 메인 페이지"
            imgWidth={950}
            imgHeight={440}
            className="mainPage-ImgCard"
          />
        </div>
        {/* 사용된 스택과 링크 */}
        <div className="w-full flex justify-between">
          <TextAlign title="사용된 스택과 링크" type="left">
            <p>스택 : TYPESCRIPT, NEXT.JS, EXPRESS, MySQL</p>
            <p className="m-0 whitespace-pre-wrap">
              의의 : 자신 성찰, CURD, 디자인 역량 강화, 바닐라 애니메이션 구현
            </p>
            <p>툴 : Notion, Github, Figma</p>
            <p>&nbsp;</p>
            {/* todo : a 링크 추가 예정 */}
            <p>
              {`개인 노션 링크 : `}
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="추후 추가 예정"
                className="whitespace-pre-wrap"
              >
                <UnderBarAni>윤준현 - 포트폴리오 사이트</UnderBarAni>
              </a>
            </p>
            <p>
              {`피그마 : `}
              <a
                className="whitespace-pre-wrap"
                href={`https://www.figma.com/file/9BzcyeVaToW3smjAxnEa5l/YoonJieut-%EA%B0%9C%EC%9D%B8-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?type=design&node-id=903-4678&mode=design&t=XVHBP52gD8l850Ic-0`}
                target="_blank"
              >
                <UnderBarAni>PF Site</UnderBarAni>
              </a>
            </p>
          </TextAlign>
        </div>
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
        <TextAlign title="혼란의 과정" type="left">
          <p>
            인도, 일본 웹 디자인 트랜드, 수 많은 레퍼런스 페이지를 계속 탐구해
            나갔지만 <b>많은 혼란만 있었습니다.</b>
          </p>
          <p>&nbsp;</p>
          <p>
            <b>초보 디자인이라면 느끼는 막막함’</b>
          </p>
          <p>
            내가 뭘 좋아하는 지도 모르는데’라는 마음은 테마를 결정하는 <br />
            과정에서부터 삐긋 거리기도 했습니다.{" "}
          </p>
          <p>&nbsp;</p>
          <p>결국 처음으로 돌아가기로 했습니다.</p>
        </TextAlign>
        <ImgCard
          imgUrl="/images/pf_second.png"
          imgAlt="첫번 째로 만든 레퍼런스들과 레이아웃 사진이 담겨있습니다."
          imgSub="화려한 인터렉션 중심 레퍼런스"
          imgWidth={360}
          imgHeight={360}
        />
      </div>
      {/* 중앙 정렬 - 윤준현 연구 */}
      <div className="w-full flexCenter">
        <TextAlign title="디자인 연구 = 윤준현 연구" type="center">
          <div className="flex flex-col gap-2">
            <p>
              많은 고민 속 내린 질문 <b>“내 방을 어떻게 꾸미면 좋을까?”</b>
            </p>
            <p>
              그 결과 저는 <b>미니멀리즘에 매력</b>을 느꼈습니다.
            </p>
            <p>그리고 그것을 디자인에 반영하기로 결정했습니다.</p>
          </div>
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
        <TextAlign title="근거는 과거의 자신" type="right">
          <p>
            <b>나는 옛날부터 이런 것을 좋아 했지 </b>
          </p>
          <p>확신을 가진 것은 다름 없는 과거의 제 자신의 흔적이었습니다.</p>
        </TextAlign>
      </div>
      {/* 왼쪽 정렬 - 확신은 디자인 연구 */}
      <div className="w-full flex justify-between items-start">
        <TextAlign title="확신은 연구" type="left">
          <p>
            <b>‘어떤 의도로 디자인 했지..?’</b>
          </p>
          <p>
            무언가 모를 감정을 정의하는 과정은 꽤나 힘듭니다. <br />
            충격적이게도 작은 인터렉션에도 의미가 있었던 것입니다.
          </p>
          <p>&nbsp;</p>
          <p>
            <b>막막한 가운데 갔던 도서관</b>
          </p>
          <p>미술 역사책에서 봤던 한 작품은 저에게 깊은 영감을 주었습니다.</p>
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
      <div className="w-full h-full flex flex-col gap-12">
        <div className="w-full flexCenter">
          <TextAlign title="나만의 결론 내기" type="center">
            <div className="flex flex-col gap-2">
              <p>
                예술이란 <b>의도를 갖고 표현하는 방식을 고민</b>하는 것
              </p>
              <p>그렇다면 웹도 다를 것이 없을 것이다</p>
            </div>
          </TextAlign>
        </div>
        {/* 이슈 todo - 이미지 퀄리티가 많이 떨어진다. */}
        <ImgCard
          imgUrl="/images/pf_figma.png"
          imgAlt="이전 웹 퍼블리셔 과정에 준비하던 pf 이미지가 담겨있습니다."
          imgTitle="이미지 이전 포트폴리오 사이트"
          imgSub="흔한 레이아웃"
          fill={true}
          className="figmaImgCard h-[400px] w-full"
        />
      </div>
      {/* 아쉬운점, 결론 문단 */}
      <div className="flex flex-col gap-20">
        {/* 오른 정렬 - 아쉬운 점 */}
        <div className="w-full flex justify-end">
          <TextAlign title="작업 시 아쉬운 점" type="right">
            <p>
              이번 작업은 <b>완벽주의라는 틀</b>에 갇혀 많은 생각에
              가로막혔습니다.
              <br />
              많은 욕심으로 머신러닝 프로덕트와 기술력도 탐냈고,
              <br />
              화려한 인터렉션에도 홀려 <b>주관을 흐리기도 했습니다.</b>
            </p>
            <p>&nbsp;</p>
            <p>
              이 현상에 갇힌 것은 저의 <b>“마음 문제”</b>가 가장 크다고
              생각합니다. <br />
              작은 욕심을 원동력으로 많은 작업을 서스럼없이 하게 되었을 때{" "}
              <br />
              비로소 성장한다는 것을 느꼈습니다.
            </p>
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 - 의의와 결론 */}
        <div className="w-full flex justify-between items-start pb-10">
          <TextAlign title="의의와 결론" type="left">
            <p>
              <b>이번 작품에서 가장 주요하게 여긴 것</b>
            </p>
            <p>
              {" "}
              바로 자신에 대한 연구였는데요 많은 사람은 면접자에 대해 그리
              궁금해 하지 않는다고들 합니다.{" "}
            </p>

            <p className="mt-2">
              하지만 <br />
              저의 개발자 인생에 있어서 꼭 필요한 과정이었습니다.
              <br />
              이후 모든 작업에 자신감을 가져다 주었습니다.
            </p>
            <p>&nbsp;</p>
            <p>
              <b>무엇을 하던 불확실한 현재</b>
            </p>
            <p>
              오로지 믿은 것은 저 자신이었습니다. <br />
              겸손과 성찰에 대한 중요성, 자신에 대한 주관을 세울 수 있는
              작품이었습니다.
            </p>
          </TextAlign>
        </div>
      </div>
    </>
  );
}

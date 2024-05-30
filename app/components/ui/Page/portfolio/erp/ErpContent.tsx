import UnderBarAni from "@/app/components/animation/UnderBarAni";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";
export default function ErpContent() {
  return (
    <>
      <div className="entryPart flex flex-col gap-20">
        {/* 메인 엔트리 파트 */}
        {/* 메인 이미지 모습 */}
        <div className="EntryPart w-full">
          <ImgCard
            imgUrl="/images/erp_mainpage.png"
            imgAlt="테마는 재밌게 스타크래프트로 하고, 기능은 최대한 많이 구현한 저의 erp 프로젝트 메인 페이지가 담겨있는 이미지입니다."
            imgTitle="ERP의 메인 페이지"
            imgWidth={950}
            imgHeight={440}
            className="mainPage-ImgCard"
          />
        </div>
        {/* 사용된 스택과 링크 */}
        <div className="w-full flex justify-between">
          <TextAlign title="사용된 스택과 링크" type="left">
            <p>{`스택 : Typescript, NEXT.JS, EXPRESS, MariaDB `}</p>
            <p className="m-0 whitespace-pre-wrap">{`의의 : 협업 , Next.JS , DB 설계와 기획 팀 협업 `}</p>
            <p>툴 : Notion, Github, Figma</p>
            <p>&nbsp;</p>
            <p>
              {`개인 노션 링크 : `}
              <a
                rel="noreferrer noopener"
                className="whitespace-pre-wrap"
                href="https://resilient-aster-1dc.notion.site/ERP-63d8c0f6651e4808a677791431d18c61?pvs=4"
                target="_blank"
              >
                <UnderBarAni>윤준현 - 스타크래프트 ERP</UnderBarAni>
              </a>
            </p>
            <p>
              {`팀 노션 링크 : `}
              <a
                className="whitespace-pre-wrap"
                href="/FORM-8bb1a4092ee34bab83f8dbd0077fa943?pvs=24"
                target="_blank"
              >
                <UnderBarAni>FORM미쳤다</UnderBarAni>
              </a>
            </p>
            <p>
              {`피그마 : `}
              <a
                className="whitespace-pre-wrap"
                href={`https://www.figma.com/file/5KDz54ixEJir3fd9V6fJ1L/ERP-DB?type=whiteboard&node-id=0-1`}
                target="_blank"
              >
                <UnderBarAni>ERP DB</UnderBarAni>
              </a>
              {` , `}
              <a
                className="whitespace-pre-wrap"
                href={`https://www.figma.com/file/2lrzpae0BKnkLMTZgJSjgY/Wireframe?type=design&node-id=37-41&mode=design`}
                target="_blank"
              >
                <UnderBarAni>Wireframe</UnderBarAni>
              </a>
            </p>
          </TextAlign>
          {/* 이미지 자리 */}
        </div>
      </div>
      {/* 중앙 텍스트 */}
      <div className="w-full flexCenter">
        <TextAlign title="" type="center">
          <p>
            <b className="whitespace-pre-wrap">ERP이해, DB 설계 파트를 담당</b>
            <span>{`하고 `}</span>
            <b>기획 및 구현에 참여 했습니다.</b>
          </p>
        </TextAlign>
      </div>
      {/* 오른 정렬 - 왜 db를 맡았나? */}
      <div className="w-full flex justify-between items-start">
        <ImgCard
          imgUrl="/images/erp_db.png"
          imgAlt="초기 팀원이 만든 스키마 설계를 모두 하나하나 검토하며 완성한 3번째 버전의 최종 스키마 설계도가 이미지에 담겨 있습니다."
          imgTitle="최종 DB 관계도"
          imgSub="MariaDB"
          imgWidth={400}
          imgHeight={400}
          className="db-ImgCard"
        />
        <TextAlign title="왜? DB를 맡았나?" type="right">
          <p>
            <b>퍼블리셔 과정</b>을 지내며 배운 디자인과 프론트 작업보다는
            <br />
            <b>전체적인 경험</b>하고 배우고 싶었습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            모든 팀원이 잘 모르는 상태에서 프로덕트를 <br />
            기획하고 고민하는 것이것은 정말 진귀한 경험일 것입니다.
          </p>
          <p>&nbsp;</p>
          <p>
            익숙치 않은 작업이기에 <b>몇 일을 고생</b>하며 만들었지만,
            <br />
            팀원들이 <b>설계의 의도를 이해</b> 해줄 때나 <br />
            프로덕트가 의도한 대로 <b>바르게 작동</b>될 때의 <br />
            경험은 잊을 수 없었습니다.
          </p>
        </TextAlign>
      </div>
      {/* 오른 정렬 */}
      <div className="leftAndRight w-full flex flex-col gap-20">
        <div className="w-full flex justify-end">
          <TextAlign title="MariaDB를 채택" type="right">
            <p>
              ERP라는 개념도 <b>모르는 상태</b>에서 <br />
              시작된 프로젝트는 많은 혼란이 있었습니다.
            </p>
            <p>&nbsp;</p>
            <p>
              <b>사업 규모</b>의 ERP는{" "}
              <b>많은 상품에 대한 정보와 게시물을 상정</b>
              <br />
              하는 과정이 필요하다고 생각했습니다.
            </p>
            <p>&nbsp;</p>
            <p>
              <b>그로 인해</b>
            </p>
            <p>
              유연한 NoSQL 보다는 안정성에 유리한 SQL을 활용하기 위해 <br />
              MySQL와 유사한 MariaDB를 채택했습니다.
            </p>
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 */}
        <div className="w-full flex justify-start">
          <TextAlign title="첫 DB 설계" type="left">
            <p>
              <b>SQL, 스키마, 키, 인덱스 - 처음보는 개념들</b>
              <br />
              처음 겪어보는 DB설계는 많은 지식이 필요했습니다.
              <br /> 기능을 나열한 명세표를 기준으로 DB를 설계해 보았는데,
              <br />
              개발 환경 설정부터 막혀서 <b>막막했던 경험</b>이 있습니다.
            </p>
            <p>&nbsp;</p>
            <p>
              입문서를 구매하여 개념을 나열하고 공부하며 정리하는 과정
              <br />을 통해 DB 테이블의 관계도에 대해 공부하고 이해하였습니다.
            </p>
            <p>&nbsp;</p>
            <p>
              이후 회의나 개인적인 시간을 할애하여
              <br />
              <b>팀원과 지식 교류</b> 에 힘썼으며 그 결과{" "}
              <b>모든 팀원의 중심</b>에서 <br />
              소통하며 프로젝트 운영이 원활할 수 있도록 도왔습니다.
            </p>
          </TextAlign>
        </div>
      </div>
      {/* 왼쪽 정렬 - 스키마 설계 */}
      <div className="w-full flex justify-between">
        <TextAlign title="스키마 설계" type="left">
          <p>
            초기 스키마 설계에 많은 오류 사항이 있었기 때문에 <br />
            완전히 새로 고치기로 마음 먹었습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            첫 설계가 스키마 설계라 많은 어려움이 있었지만 <br />
            <b>이전에 IA</b>를 잘 적어놨고, 지인을 통해 IA나 DB 타입에 대해
            물어보기도 하고, <b>누수 체크를 2번씩</b> 하며 DB로 개발에 막히는
            일이 없도록 <br />
            최선을 다했습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            다만, 컬럼을 설정하며 의도를 따로 적지 않아 <br />
            팀원이 문제 풀 듯이 의도를 파악하거나 저에게 물어보는 것을
            <br />
            강제했다는 것이 조금 아쉬웠던 것 같습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            칼럼 별 어느 기능에 속하는 지 표로 만들었으면 어땠을까하는 아쉬움이
            남습니다.
          </p>
        </TextAlign>
        {/* 이미지 카드 */}
        <ImgCard
          imgUrl="/images/erp_research.png"
          imgAlt="A3 페이지에 수기로 작성된 IA 기능표와 스키마 설계, 관계도가 작성되어 있습니다."
          imgTitle="왼쪽 위 IA의 기능을 나열"
          imgSub="A3 페이지에 모두 적고 검토했다."
          imgWidth={400}
          imgHeight={400}
          className="db-ImgCard"
        />
      </div>
      {/* 중앙 정렬 - 환경 구성의 중요성 */}
      <div className="w-full flexCenter">
        <TextAlign
          title="환경 구성의 중요성 : 공용 로컬 서버 접근 방식"
          type="center"
        >
          <p>
            작업하며 DB 테이블의 설계가 완벽하지 않고, 추가적인 테이블 수정
            작업을 위해 <b>실시간 공유하는 환경</b>을 원했습니다. <br />
            하나의 컴퓨터를 네트워크 방화벽을 열어서, ip 설정을 열어 팀원 모두가
            실시간으로 피드백 받을 수 있는 환경을 구축했습니다. 배포나 AWS RDS
            같이 클라우든 환경에 대한 경험이 없는 그 때 당시 모두가 신기해 했던
            경험이 기억에 남습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            이 환경 구축 덕분에 편하게 가데이터를 작성하고, <br />
            칼럼 별 설명 칸에 기초값이나 코멘트를 달아 작업하기 쉽도록
            노력했습니다.
          </p>
        </TextAlign>
      </div>
      {/* 왼쪽 정렬 - 결론 */}
      <div className="w-full pb-10">
        <TextAlign title="팀업" type="left">
          <p>
            공식적으로 팀 단위를 행동하며 <br />
            IA를 본격적으로 작성해보고 설계에 따라 작업을 진행해보았습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            처음 해보는 DB 공부와 설계로 많은 어려움을 겪었지만, 공부하며
            설계하고 MariaDB의 트랜젝션 기능도 활용해보고, <br />
            주변 지식의 공부할 수 있었습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            팀원의 피드백을 적극 수용하며 혼자만 하는 것이 아니라
            <br />
            팀원과 협업과 소통한 진귀한 경험이었습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            팀원분의 아이디어로 같은 인터넷을 활용하는 <b>LAN 환경을 활용</b>
            하여 <br />
            팀원들과 연결하여 편하게 조정할 수 있었습니다. <br />
            DevOps의 중요성을 엿보는 듯 했습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            팀원을 파악하고 서로 돕는 등 내 작업에만 몰두하는 것이 아니라,{" "}
            <br />팀 노션을 활용하여 리스트업 한 일을 처리하고, <br />
            서로 공부한 것을 확인하고 공유하였습니다.
          </p>
          <p>&nbsp;</p>
          <p>
            팀의 흐름을 파악하고 조언하며 서로 돕거나 <br />
            상호작용과 객관화를 통해 인적 자원을 파악하는 등 <br />
            <b>팀업에 필요한 눈을 기를 수 있다는 것이 큰 배움</b>이라고
            생각합니다.
          </p>
        </TextAlign>
      </div>
    </>
  );
}

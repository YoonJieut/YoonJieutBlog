// pagesMetaData.ts
// 포트 폴리오 관련 리터럴 데이터가 적혀있는 파일

import { PortfolioMessage } from "@/app/_interfaces/common/TextResourcesProp";

const portfolioMessage: PortfolioMessage[] = [
  {
    name: "YoonJieut",
    path: "http://localhost:3000/main/introduce/yoonjieut",
    stack: ["TypeScript", "NEXT.JS", "EXPRESS", "MySQL", "Figma"],
    imgUrl: "/images/entry.png",
    introduce: {
      content:
        "개인 프로젝트로 진행하는 포트폴리오 사이트입니다.기본 작성법과 SSR 구현 뿐 아니라, 프론트엔드 개발자로서 '디자인 역랑'도 기르기 위해 디자인의 기본 흐름과 본인의 스타일 확신에 관한 연구도 병행하였습니다.\n컴포넌트 구조를 고려하고, Figma Dev툴을 이용해 컴포넌트를 제작해보는 시도를 해보았습니다.\n'애니메이션을 바닐라 코드로 제작'해보며 애니메이션의 원리를 이해하고, 이를 바탕으로 CSS 애니메이션을 구현해보았습니다.\n유지보수 측면에서는 리터럴을 분리하는 과정을 진행하고 있으며 이를 통해 실제 프로젝트에서 어떤 경험이 주요할까 스스로 고민해보는 시간을 가지게 되었습니다.",
    },
    aboutme: {
      content:
        "개인 프로젝트로 진행하는 포트폴리오 사이트입니다. '디자인 역랑'도 기르기 위해 디자인의 기본 흐름과 본인의 스타일 확신에 관한 연구도 직접하였고 애니메이션을 바닐라로 제작해보았습니다.",
    },
  },
  {
    name: "ERP",
    path: "http://localhost:3000/main/introduce/erp",
    stack: ["TypeScript", "NEXT.JS", "EXPRESS", "MariaDB", "Figma", "Slack"],
    imgUrl: "/images/erp_sub.png",
    introduce: {
      content:
        "기업에서 자주 사용하는 ERP 시스템을 팀 협업을 통해 구축해보며 프로덕트 개발의 워크 플로를 경험했습니다.\n이를 통해 PM과 개발자의 역할을 동시에 수행하며 프로젝트를 진행했습니다.\n구현 외 기획과 DB 스키마 설계, 트리거 설정, 노션 문서화 작업을 통해 프로젝트의 전반적인 흐름을 이해하고, 이를 바탕으로 개발을 진행했습니다.\n또한, Figma를 이용해 프로토타입 제작과 디자인을 하고, Slack을 이용해 팀원들과 소통하며 프로젝트를 진행했습니다.\n마음대로 안 되었던 점은 소통하며 작업할 땐, 본인 작업의 역량이 떨어지는 현상을 발견하여 이를 해결하기 위해 역할 분담과 중복되는 일이 없도록 노력했습니다.",
    },
    aboutme: {
      content:
        "기업에서 자주 사용하는 ERP 시스템을 팀 협업을 통해 구축해보며 프로덕트 개발의 워크 플로를 경험했습니다.",
    },
  },
  {
    name: "ChatNovel",
    path: "http://localhost:3000/main/introduce/chatnovel",
    stack: ["JavaScript", "Express", "HTML", "CSS"],
    imgUrl: "/images/chat_main.png",
    introduce: {
      content:
        "새로운 취미인 소설을 활용한 프로젝트를 진행해보며 좋아하는 것을 통해 공부도 할 수 있다는 것에 대한 확신을 가지게 해준 프로젝트입니다.\n초기 JS에 입문했을 때, 막막하던 개발을 공부를 통해 개념을 빠르게 확립하고 프로젝트에 적용하므로서 CLOUSRE 패턴과 REACT의 코어에 해당하는 컴포넌트 생성과 랜더링 방식에 대해 이해하게 되었습니다.\n이 프로젝트를 하며 취미를 통해 공부하는 것이 얼마나 즐거운 일인지 깨달을 수 있었습니다.",
    },
    aboutme: {
      content:
        "취미를 통해 만든 해당 프로젝트는 학습과 적용이 중요함을 느끼고, 재밌게 공부할 수도 있다는 것을 알게 해준 프로젝트입니다.",
    },
  },
];

export default portfolioMessage;

export interface PortfolioMessage {
  path: string;
  name: string;
  stack: string[];
  imgUrl: string;
  introduce: {
    content: string;
  };
  aboutme: {
    content: string;
  };
}

// ? 인터페이스를 이렇게 묶어서 사용하는게 좋을까?
// 답 : 필요에 따라 나누기도 하지만 하나로 묶는게 좋다.

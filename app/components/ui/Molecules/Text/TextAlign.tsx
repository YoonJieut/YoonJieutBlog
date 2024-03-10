import { ReactNode } from "react";

interface TextAlignProps {
  title: string;
  children: ReactNode;
  type: "left" | "right" | "center";
}

/**
 * 텍스트 정렬 컴포넌트입니다.
 * @param {TextAlignProps} props - 컴포넌트에 전달되는 속성들입니다.
 * @returns {JSX.Element} - 텍스트 정렬 컴포넌트의 JSX 요소입니다.
 * @example
 * // 사용 예시
 * <TextAlign title="제목">내용</TextAlign>
 */
const TextAlign = (props: TextAlignProps): JSX.Element => {
  const { title, children, type } = props;

  return (
    <>
      {type === "left" && (
        <div className="flex flex-col justify-start gap-[5px] w-[23.688rem] font-sub-1">
          <b className="titleText">{title}</b>
          <div className=" relative text-[0.841rem] leading-[159%] inline-block shrink-0">
            <p className="m-0">{children}</p>
          </div>
        </div>
      )}
      {type === "right" && (
        <div className="flex flex-col justify-end text-right gap-[5px] w-[23.688rem] font-sub-1">
          <b className="titleText">{title}</b>
          <div className=" relative text-[0.841rem] leading-[159%] inline-block shrink-0">
            <p className="m-0">{children}</p>
          </div>
        </div>
      )}
      {type === "center" && (
        <div className="flex flex-col justify-center gap-[5px] w-[44rem] text-center font-sub-1">
          <b className="centerTitleText text-[20px]">{title}</b>
          <div className="relative text-[0.841rem] leading-[159%] inline-block  shrink-0 text-[14px]">
            <p className="m-0">{children}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TextAlign;

import { ReactNode } from "react";

interface TextAlignProps {
  title: string;
  children: ReactNode;
  type: "left" | "right" | "center";
}

/**
 * 텍스트가 정렬되는 문단 컴포넌트입니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 속성들입니다.
 * @param {string} props.title - 제목 텍스트입니다.
 * @param {string} props.children - 내용 텍스트입니다.
 * @param {string} props.type - 텍스트 정렬 방식입니다. "left", "right", "center" 중 하나를 선택할 수 있습니다.
 * @returns {JSX.Element} - 텍스트 정렬 컴포넌트를 반환합니다.
 * @example
 * // 사용 예시
 * <TextAlign title="제목" type="left">
 *   내용
 * </TextAlign>
 */
const TextAlign = ({ title, children, type }: TextAlignProps): JSX.Element => {
  let containerClassName = "";
  let titleClassName = "";
  let textClassName = "";

  if (type === "left") {
    containerClassName =
      "flex flex-col justify-start gap-[5px] w-[23.688rem] font-sub-1";
    titleClassName = "titleText";
    textClassName = "text-[0.841rem] leading-[159%] inline-block shrink-0";
  } else if (type === "right") {
    containerClassName =
      "flex flex-col justify-end text-right gap-[5px] w-[23.688rem] font-sub-1";
    titleClassName = "titleText";
    textClassName = "text-[0.841rem] leading-[159%] inline-block shrink-0";
  } else if (type === "center") {
    containerClassName =
      "flex flex-col justify-center gap-[5px] w-[44rem] text-center font-sub-1";
    titleClassName = "centerTitleText text-[20px]";
    textClassName =
      "text-[0.841rem] leading-[159%] inline-block shrink-0 text-[14px]";
  }

  return (
    <div className={containerClassName}>
      <b className={titleClassName}>{title}</b>
      <div className={textClassName}>{children}</div>
    </div>
  );
};

export default TextAlign;

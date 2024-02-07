import React, { FC, MouseEvent } from "react";

interface ButtonProps {
  content: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button 컴포넌트는 클릭 가능한 버튼을 나타냅니다.
 *
 * @param {Object} props - Button 컴포넌트의 속성
 * @param {string} props.content - 버튼에 표시될 텍스트
 * @param {Function} props.onClick - 버튼 클릭 시 실행될 함수
 *
 * @returns {JSX.Element} - 생성된 버튼 요소
 *
 * @example
 * ```tsx
 * <Button content="Click me" onClick={() => console.log('Button clicked')} />
 * ```
 */
const Button: FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;

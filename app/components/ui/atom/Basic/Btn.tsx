"use client";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

// todo 너무 좋아서 이걸 내 유틸함수로 만들자

interface ModalBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  children?: ReactNode;
}

/**
 * 모달 버튼 컴포넌트입니다.
 *
 * @param {ModalBtnProps} props - ModalBtn 컴포넌트에 대한 속성 props입니다.
 * @param {string} props.content - 버튼 내부에 표시될 내용입니다.
 * @param {ReactNode} props.children - 버튼 내부에 렌더링될 자식 요소입니다.
 * @returns {JSX.Element} 렌더링된 ModalBtn 컴포넌트입니다.
 */
const Btn = ({ content, children, ...props }: ModalBtnProps) => {
  return (
    <button {...props}>
      <p>{content}</p>
      {children}
    </button>
  );
};

export default Btn;

"use client";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

// todo 너무 좋아서 이걸 내 유틸함수로 만들자

// type ModalBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   children: ReactNode;
// };

interface ModalBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  children: ReactNode;
}

const ModalBtn = ({ content, children, ...props }: ModalBtnProps) => {
  return (
    <button
      className="modalBtn flex items-center justify-between px-8 w-52 h-14  outline outline-1"
      {...props}
    >
      <p>{content}</p>
      {children}
    </button>
  );
};

export default ModalBtn;

"use client";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

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

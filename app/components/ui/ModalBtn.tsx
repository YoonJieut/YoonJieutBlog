"use client";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

// type ModalBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   children: ReactNode;
// };

interface ModalBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ModalBtn = ({ children, ...props }: ModalBtnProps) => {
  return (
    <button
      className="modalBtn flex justify-center items-center space-x-10"
      {...props}
    >
      {children}
    </button>
  );
};

export default ModalBtn;

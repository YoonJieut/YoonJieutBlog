"use client";
import React, { MouseEvent } from "react";
import ModalBtn from "@/app/components/ui/Molecules/Buttons/ModalBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// todo : 나중에 링크나 엑션을 구현해야 한다.

interface ViewMoreBtnProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ViewMoreBtn({ onClick }: ViewMoreBtnProps) {
  return (
    <ModalBtn content="view more" onClick={onClick}>
      <FontAwesomeIcon
        icon={faPenToSquare}
        className="fas fa-pen-to-square"
        style={{ color: "#c9c9c9" }}
      />
    </ModalBtn>
  );
}

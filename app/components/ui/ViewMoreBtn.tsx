"use client";
import React, { MouseEvent } from "react";
import ModalBtn from "../../components/ui/ModalBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

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

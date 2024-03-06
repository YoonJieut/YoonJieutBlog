"use client";
import React, { MouseEvent } from "react";
import ModalBtn from "@/app/components/ui/Molecules/Buttons/ModalBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
interface ViewMoreBtnProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function GithubBtn({ onClick }: ViewMoreBtnProps) {
  return (
    <ModalBtn content="GitHub" onClick={onClick}>
      <FontAwesomeIcon icon={faGithub} style={{ color: "#c9c9c9" }} />
    </ModalBtn>
  );
}

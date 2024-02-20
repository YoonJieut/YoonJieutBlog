"use client";

import getAdminCommands from "@/app/utils/backend/getCmdArray";
import { checkWordInArray } from "@/app/utils/checkWordInArray";
import customFetchJSON from "@/app/utils/frontend/customFetchJSON";
import fetchJSON from "@/app/utils/frontend/fetchJSON";
import { useEffect, useState } from "react";

const placeholders = [" Type here.", " Type here..", " Type here..."];

export const CustomInputArea = (): JSX.Element => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  // todo : 나중에 인풋 내용에 따라 라우팅을 다르게 해야 한다.
  const [inputValue, setInputValue] = useState("관리자");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 700);
    // 언마운트 될 때 나오는 cleanup 함수
    return () => clearInterval(interval);
  }, []);

  const inputStyles = {
    width: "100%",
    height: "100%",
    outline: "none",
    background: "transparent",
    fontSize: "calc(100vw / 10)",
    padding: "4px 8px",
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      //엔터 이벤트를 여기서 처리
      console.log("Enter");

      // 페치로 배열가져오기
      fetchJSON("/api/cmdArray")
        .then((data) => {
          console.log(data);
          if (checkWordInArray(inputValue, data)) {
            // 관리자 명령어가 있는 경우
            window.location.href = "/admin";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="w-full flex p-4 items-end justify-center">
      <label htmlFor="customInput" title="CustomInput">
        <input
          id="customInput"
          style={inputStyles}
          placeholder={placeholders[currentPlaceholderIndex]}
          className="flex items-center"
          onKeyPress={handleKeyPress}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
      </label>
    </div>
  );
};

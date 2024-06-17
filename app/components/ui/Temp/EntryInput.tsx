"use client";

import { checkWordInArray } from "@/app/utils/checkWordInArray";
import fetchJSON from "@/app/utils/frontend/fetch/fetchJSON";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const placeholders = [" Type here.", " Type here..", " Type here..."];

export const EntryInput = (): JSX.Element => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  const [inputValue, setInputValue] = useState("");

  // 라우트 전용
  const router = useRouter();
  function moveToPage(page: string) {
    // 다른 페이지로 이동
    router.push(page);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 700);
    // 언마운트 될 때 나오는 cleanup 함수
    return () => clearInterval(interval);
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // 페치로 배열가져오기
      fetchJSON("/api/cmdArray")
        .then((data) => {
          console.log(data);
          if (checkWordInArray(inputValue, data)) {
            // 관리자 명령어가 있는 경우
            // todo : 보안적 측면으로 이 url이 나타나지 않는 형태로 한다.
            moveToPage("/admin");
          } else {
            moveToPage("/mainTest");
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
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
            background: "transparent",
            fontSize: "calc(100vw / 6)",
            padding: "4px 8px",
            textAlign: "left", // 문자열 리터럴 타입으로 지정
            letterSpacing: "-0.03em",
          }}
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

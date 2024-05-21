"use client";

import { checkWordInArray } from "@/app/utils/checkWordInArray";
import fetchJSON from "@/app/utils/frontend/fetch/fetchJSON";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const placeholders = ["Type here.", "Type here..", "Type here..."];

export const CustomInputAreaVer2 = (): JSX.Element => {
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
    <div className="w-full ml-10">
      <label htmlFor="customInput" title="CustomInput">
        <input
          id="customInput"
          style={{
            background: "transparent",
            fontSize: "257px",
            textAlign: "left",
            letterSpacing: "-0.03em",
            outline: "none",
            padding: "0px",
          }}
          className="koulen w-3/4 font-sub-1"
          placeholder={placeholders[currentPlaceholderIndex]}
          onKeyPress={handleKeyPress}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
      </label>
    </div>
  );
};

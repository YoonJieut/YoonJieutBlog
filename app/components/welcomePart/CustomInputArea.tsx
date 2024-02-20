"use client";

import { useEffect, useState } from "react";

const placeholders = [" Type here.", " Type here..", " Type here..."];

export const CustomInputArea = (): JSX.Element => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 700);

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
    }
  };

  return (
    <div className="w-screen h-screen flex p-4 items-end justify-center">
      <label htmlFor="customInput" title="CustomInput">
        <input
          id="customInput"
          style={inputStyles}
          placeholder={placeholders[currentPlaceholderIndex]}
          className="flex items-center"
          autoFocus
          onKeyPress={handleKeyPress}
        />
      </label>
    </div>
  );
};

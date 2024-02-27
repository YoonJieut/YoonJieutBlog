import React, { useEffect, useState, useRef } from "react";

interface ResponsiveTextProps {
  text: string;
  className?: string; // 부모의 className을 설정할 수 있는 매개변수 추가
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ text, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(12); // 초기 폰트 크기 설정

  useEffect(() => {
    const adjustTextSize = () => {
      if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;
        const calculatedFontSize = Math.max(12, divWidth / 10); // div 너비에 따라 폰트 크기 조정
        setFontSize(calculatedFontSize);
      }
    };

    adjustTextSize();
    window.addEventListener("resize", adjustTextSize);

    // 리턴으로 clenup 함수를 반환
    return () => {
      window.removeEventListener("resize", adjustTextSize);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`w-full h-64 bg-gray-200 flex justify-center items-center ${className}`}
    >
      <span style={{ fontSize: `${fontSize}px` }}>{text}</span>
    </div>
  );
};

export default ResponsiveText;

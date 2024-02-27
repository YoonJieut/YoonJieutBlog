import React, { useEffect, useState, useRef } from "react";

interface ResponsiveTextProps {
  text: string;
  className?: string; // 부모의 className을 설정할 수 있는 매개변수 추가
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ text, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(12); // 초기 폰트 크기 설정
  const [lineHeight, setLineHeight] = useState(0); // 초기 라인 높이 설정

  useEffect(() => {
    const adjustTextSize = () => {
      if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;
        const divHeight = divRef.current.offsetHeight;
        const calculatedFontSize = Math.max(12, divWidth / 6); // div 너비에 따라 폰트 크기 조정
        const calculatedLineHeight = divHeight / 2; // div 높이에 따라 폰트 크기 조정
        setFontSize(calculatedFontSize);
        setLineHeight(calculatedLineHeight);
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
    <div ref={divRef} className={`Noto ${className}`}>
      <span
        style={{ fontSize: `${fontSize}px`, lineHeight: `-${lineHeight}px` }}
      >
        {text}
      </span>
    </div>
  );
};

export default ResponsiveText;

"use client";

import React, { useState, useEffect, useRef } from "react";

interface FlowAniProps {
  children: React.ReactNode;
}

export default function FlowAni({ children }: FlowAniProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const largeTextRef = useRef<HTMLDivElement>(null); // 첫 번째 LargeText 컴포넌트를 위한 ref

  useEffect(() => {
    if (!largeTextRef.current) return;

    const largeTextWidth = largeTextRef.current.offsetWidth;
    const updateScrollPosition = () => {
      // 조금이라도 넘어갔을 때의 조건을 처리
      setScrollPosition((prevPosition) => {
        // 스크롤 위치가 컴포넌트 너비의 절반을 넘어서면 초기화
        if (Math.abs(prevPosition) >= largeTextWidth) {
          return 0;
        } else {
          return prevPosition - 1;
        }
      });
    };

    const interval = setInterval(updateScrollPosition, 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="OutLine w-full flex"
      style={{
        transform: `translateX(${scrollPosition}px)`,
      }}
    >
      {React.Children.map(children, (child) => (
        <div ref={largeTextRef}>
          {React.cloneElement(child as React.ReactElement)}
        </div>
      ))}
    </div>
  );
}

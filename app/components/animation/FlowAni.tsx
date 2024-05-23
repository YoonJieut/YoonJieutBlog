"use client";
import React, { useState, useEffect, useRef } from "react";

interface FlowAniProps {
  children: React.ReactNode[];
}

export default function FlowAni({ children }: FlowAniProps) {
  const [items, setItems] = useState(React.Children.toArray(children)); // 자식 컴포넌트들을 배열로 변환
  const flowRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // 순서를 변경하는 함수
  const reflowChildren = () => {
    setItems((prevItems) => {
      const last = prevItems.slice(-1);
      const rest = prevItems.slice(0, -1);
      return [...last, ...rest];
    });
  };

  const animate = () => {
    const flowElement = flowRef.current;
    // flowElement가 존재하고 자식 요소가 하나 이상 있는지 확인
    if (flowElement && flowElement.children.length > 0) {
      const firstChild = flowElement.children[0] as HTMLElement;

      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - 2; // 스크롤 속도 조절
        // 첫 번째 자식이 화면 밖으로 나갈 정도로 스크롤 되었는지 확인
        if (-newPosition >= firstChild.offsetWidth + 10) {
          reflowChildren(); // 자식 컴포넌트 순서 변경
          return newPosition + firstChild.offsetWidth; // 스크롤 위치를 첫 번째 자식의 너비만큼 다시 앞으로 조정
        }

        return newPosition; // 그렇지 않다면 스크롤 위치 업데이트
      });
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  });

  return (
    <div
      ref={flowRef}
      className="OutLine w-full flex whitespace-nowrap"
      style={{
        transform: `translateX(${scrollPosition}px)`,
      }}
    >
      {items.map((child, index) => (
        <div key={index} style={{ display: "inline-block" }}>
          {child}
        </div>
      ))}
    </div>
  );
}

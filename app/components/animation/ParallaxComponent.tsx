"use client";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const ParallaxComponent: React.FC = () => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    console.log("scrollTop", scrollTop); // debug
    set({ offset: scrollTop / 10 });
  };
  console.log("ParallaxComponent 마운트됨");
  useEffect(() => {
    console.log("useEffect 호출됨");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      console.log("window is undefined");
    }
  }, []);

  return (
    <animated.div
      style={{
        transform: offset.to((o) => `translateY(${o}px)`),
      }}
    >
      <div style={{ height: "500px", background: "lightblue" }}>
        패럴렉스 효과가 적용된 컨텐츠
      </div>
    </animated.div>
  );
};

export default ParallaxComponent;

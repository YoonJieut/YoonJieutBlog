import FlowAni from "@/app/components/animation/FlowAni";

const WelcomePart = () => {
  return (
    <div
      className="absolute z-20 left-[-154px] top-[18rem]"
      style={{
        transform: "rotate(-40deg)",
        transformOrigin: "left top",
      }}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <FlowAni key={index}>
          <p
            key={index}
            className={`WelcomeTxt homemadeApple text-[12.5rem]`}
            style={{
              lineHeight: "1.1",
              width: "fit-content",
              height: "fit-content",
              whiteSpace: "nowrap", // Add this line to remove line breaks
              marginLeft: `${(index + 1) * 12}rem`,
              opacity: `${(Array.from({ length: 4 }).length - index) * 0.1}`,
            }}
          >
            Welcome
          </p>
          <p
            key={index}
            className={`WelcomeTxt homemadeApple text-[12.5rem]`}
            style={{
              lineHeight: "1.1",
              width: "fit-content",
              height: "fit-content",
              whiteSpace: "nowrap", // Add this line to remove line breaks
              marginLeft: `${(index + 1) * 12}rem`,
              opacity: `${(Array.from({ length: 4 }).length - index) * 0.1}`,
            }}
          >
            Welcome
          </p>
          <p
            key={index}
            className={`WelcomeTxt homemadeApple text-[12.5rem]`}
            style={{
              lineHeight: "1.1",
              width: "fit-content",
              height: "fit-content",
              whiteSpace: "nowrap", // Add this line to remove line breaks
              marginLeft: `${(index + 1) * 12}rem`,
              opacity: `${(Array.from({ length: 4 }).length - index) * 0.1}`,
            }}
          >
            Welcome
          </p>
        </FlowAni>
      ))}
    </div>
  );
};
export default WelcomePart;

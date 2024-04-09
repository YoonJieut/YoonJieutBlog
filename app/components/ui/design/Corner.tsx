import { ClassNameProps } from "@/app/_interfaces/common/CommomProps";

const Corner: React.FC<ClassNameProps> = ({ className }) => {
  return (
    <div className={`corner ${className}`}>
      <p className="font-normal text-[#c9c9c94c] text-[5px] tracking-[-0.35px] leading-[5.0px] whitespace-nowrap">
        JavaScript | TypeScript | React | Next.js | Express |
      </p>
      <div
        className="relative w-[183px] h-[9px] rotate-90 -mt-1"
        style={{ transformOrigin: "left 5px" }}
      >
        <div className="relative w-[177px] h-[9px]">
          <p className="top-[2px] blur-[2px] absolute left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#c9c9c94c] text-[5px] tracking-[-0.35px] leading-[5.0px] whitespace-nowrap">
            입체적이고 싶은 개발자! | 풀스택 개발자 | 프론트 개발자 | 백앤드
            개발자 | 개발자 포트폴리오 |
          </p>
          <p className="top-[4px] blur-[2px] absolute left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#c9c9c94c] text-[5px] tracking-[-0.35px] leading-[5.0px] whitespace-nowrap">
            입체적이고 싶은 개발자! | 풀스택 개발자 | 프론트 개발자 | 백앤드
            개발자 | 개발자 포트폴리오 |
          </p>
          <p className="top-0 absolute left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#c9c9c94c] text-[5px] tracking-[-0.35px] leading-[5.0px] whitespace-nowrap">
            입체적이고 싶은 개발자! | 풀스택 개발자 | 프론트 개발자 | 백앤드
            개발자 | 개발자 포트폴리오 |
          </p>
        </div>
      </div>
    </div>
  );
};

export default Corner;

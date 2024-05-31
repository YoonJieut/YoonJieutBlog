"use client";
import type { NextPage } from "next";
import Image from "next/image";

const AboutMePf: NextPage = () => {
  return (
    <div className="w-1/4 h-full relative bg-darkgray [backdrop-filter:blur(10px)] box-border overflow-y-scroll overflow-hidden flex flex-col items-start justify-start p-[1.25rem] gap-[3.75rem_0rem] text-left text-[1rem] text-lightgray font-noto-sans-kr border-[1px] border-solid border-lightgray">
      <div className="w-[10rem] relative h-[1.688rem]">
        <div className="absolute h-[3.7%] w-full top-[96.3%] right-[0%] bottom-[0%] left-[0%] bg-lightgray" />
        <b className="absolute top-[0%] left-[0%] leading-[101%] ">
          포트폴리오
        </b>
      </div>
      {/* pf1 */}
      <div className="w-[21.063rem] flex flex-col items-start justify-start gap-[0.625rem] cursor-pointer">
        <div className="w-full h-[2.841rem] flex flex-col items-start justify-start gap-[0.313rem]">
          <b className="relative tracking-[-0.05em] leading-[101%]">
            YOONJIEUT
          </b>
          <div className="relative text-[0.75rem] tracking-[-0.05em] leading-[114%]">
            <p className="whitespace-pre-wrap">{`EPR 시스템을 스타크래프트 테마로  작업하며  팀원 간 협업, `}</p>
            <p>블로그를 기반으로 한 포트폴리오 사이트입니다.</p>
          </div>
        </div>
        <div className="w-[21.063rem] flex flex-row flex-wrap items-start justify-start gap-[0.625rem] text-[0.75rem]">
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              Typescript
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              NextJS
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              Express
            </div>
          </div>
        </div>
        <Image
          className="border-[1px] border-solid border-gainsboro"
          src="/images/entry.png"
          alt="개인 포트폴리오 사이트입니다."
          width={350}
          height={200}
        />
      </div>
      {/* pf2 */}
      <div className="w-[21.063rem] flex flex-col items-start justify-start gap-[0.625rem_0rem] cursor-pointer">
        <div className="w-full h-[2.841rem] flex flex-col items-start justify-start gap-[0.313rem]">
          <b className="relative tracking-[-0.05em] leading-[101%]">
            스타크 래프트 ERP
          </b>
          <div className="relative w-full  text-[0.75rem] tracking-[-0.05em] leading-[114%]">
            <p className="whitespace-pre-wrap">{`EPR 시스템을 스타크래프트 테마로  작업하며  팀원 간 협업, `}</p>
            <p>DB 설계와 기획에 대해 배울 수 있었습니다.</p>
          </div>
        </div>
        <div className="w-[21.063rem] flex flex-row flex-wrap items-start justify-start gap-[0.625rem] text-[0.75rem]">
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              Typescript
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              NextJS
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              Express
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              DB 설계
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              기획과 협업
            </div>
          </div>
        </div>
        <Image
          className="border-[1px] border-solid border-gainsboro"
          src="/images/erp_sub.png"
          alt="팀 포트폴리오 사이트입니다."
          width={350}
          height={200}
        />
      </div>
      {/* pf3 */}
      <div className="w-[20.75rem] flex flex-col items-start justify-start gap-[0.625rem_0rem] cursor-pointer">
        <div className="w-full h-[2.841rem] flex flex-col items-start justify-start gap-[0.313rem]">
          <b className="relative tracking-[-0.05em] leading-[101%]">
            CHAT NOVEL
          </b>
          <div className="relative text-[0.75rem] tracking-[-0.05em] leading-[114%]">
            취미가 공부도 될 수 있다라는 사실을 알게 해준 프로젝트입니다.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0rem_0.625rem] text-[0.75rem]">
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              Javascript
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              Express
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              STUDY
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex flex-row items-center justify-center py-[0.188rem] px-[0.688rem] border-[1px] border-solid border-gainsboro">
            <div className="relative tracking-[-0.05em] leading-[101%]">
              JSON
            </div>
          </div>
        </div>
        <Image
          className="border-[1px] border-solid border-gainsboro"
          src="/images/image-44.png"
          alt="챗 소설 사이트입니다."
          width={350}
          height={200}
        />
      </div>
    </div>
  );
};

export default AboutMePf;

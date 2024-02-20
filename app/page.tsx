// import Image from "next/image";
import { CustomInputArea } from "@/app/components/welcomePart/CustomInputArea";
import { ResponseBox } from "@/app/components/welcomePart/ResponseBox";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-end items-center overflow-hidden p-4">
      {/* <ResponseBox /> */}
      <p className="font-thin font-serif">해당 페이지는 수정 중입니다.</p>
      <p className="font-thin font-serif">
        관리자 페이지 커맨드 : test, admin, 관리자
      </p>
      <CustomInputArea />
    </main>
  );
}

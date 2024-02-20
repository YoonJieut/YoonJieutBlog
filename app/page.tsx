// import Image from "next/image";
import { CustomInputArea } from "@/app/components/welcomePart/CustomInputArea";
import { ResponseBox } from "@/app/components/welcomePart/ResponseBox";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-end overflow-hidden p-4">
      {/* <ResponseBox /> */}
      <p className="font-thin font-serif">아무 키나 입력해주세요</p>
      <CustomInputArea />
    </main>
  );
}

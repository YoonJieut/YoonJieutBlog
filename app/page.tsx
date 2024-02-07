// import Image from "next/image";
import { CustomInputArea } from "@/app/components/welcomePart/CustomInputArea";
import { ResponseBox } from "@/app/components/welcomePart/ResponseBox";

export default function Home() {
  return (
    <main className="flexCenter min-h-screen flex-col ">
      <ResponseBox />
      <CustomInputArea />
    </main>
  );
}

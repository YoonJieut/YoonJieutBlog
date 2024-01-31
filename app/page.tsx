// import Image from "next/image";
import { CustomInputArea } from "@/views/welcomePart/CustomInputArea";
import { ResponseBox } from "@/views/welcomePart/ResponseBox";

export default function Home() {
  return (
    <main className="flexCenter min-h-screen flex-col ">
      <ResponseBox />
      <CustomInputArea />
    </main>
  );
}

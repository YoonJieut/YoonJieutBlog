import { CustomInputAreaVer2 } from "./components/ui/Molecules/FetchInput/CustomInputAreaVer2";

export default function Home() {
  // return <EntryLayoutVer3 />;
  return (
    <div className="bg-[#393939] flex flex-row justify-center w-screen h-screen p-3">
      <div className="bg-[#393939] overflow-hidden w-full h-full relative">
        <img
          className="absolute w-[938px] h-[179px] top-[688px] left-[109px]"
          alt="Typehere"
          src="https://c.animaapp.com/5GL7mqk5/img/typehere---.png"
        />
        <CustomInputAreaVer2 />
        <div className="homemadeApple">hello world</div>
        <div className="noto">Noto_Sans_KR</div>
        <div className="Noto">Noto_Sans_KR</div>
        <div className="koulen">Koulean</div>
        <div className="imbue">Imbue</div>
        <div className="absolute w-[953px] h-[77px] top-[578px] left-[108px]">
          <div className="relative w-[957px] h-[69px] left-[-4px]">
            <img
              className="absolute w-[822px] h-[69px] top-0 left-[4px]"
              alt="Yoon jiuet"
              src="https://c.animaapp.com/5GL7mqk5/img/yoonjiuet----------.png"
            />
            <img
              className="absolute w-[957px] h-[39px] top-[23px] left-0"
              alt="Rectangle"
              src="https://c.animaapp.com/5GL7mqk5/img/rectangle-87.svg"
            />
            <img
              className="absolute w-[257px] h-[54px] top-[9px] left-[4px]"
              alt="Yoon jiuet"
              src="https://c.animaapp.com/5GL7mqk5/img/yoonjiuet.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

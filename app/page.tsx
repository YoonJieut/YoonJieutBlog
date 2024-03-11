import { CustomInputAreaVer2 } from "./components/ui/Molecules/FetchInput/CustomInputAreaVer2";
import EntryFont from "./components/ui/design/EntryFont";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden p-3 justify-end">
      <div className="flex flex-col">
        <EntryFont />
        <CustomInputAreaVer2 />
      </div>
    </div>
  );
}

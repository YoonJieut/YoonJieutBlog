import Li from "@/app/components/ui/atom/Basic/Li";
import Ul from "@/app/components/ui/atom/Basic/Ul";
import Link from "next/link";

const PfMenu = () => {
  return (
    <div className="w-full relative h-[5.063rem] text-left text-[2.5rem] koulen">
      <Ul className="absolute top-[0rem] left-[14.063rem] flex flex-row items-start justify-start gap-[0rem_2.313rem]">
        <Li>
          <Link
            className="relative tracking-[-0.04em] leading-[101%]"
            href={"/pf/1"}
          >
            yoonjieut
          </Link>
        </Li>
        <Li>
          <Link
            className="relative tracking-[-0.04em] leading-[101%]"
            href={"/pf/2"}
          >
            erp
          </Link>
        </Li>
        <Li>
          <Link
            className="relative tracking-[-0.04em] leading-[101%]"
            href={"/pf/3"}
          >
            chat novel
          </Link>
        </Li>
      </Ul>
      <div className="absolute top-[0%] left-[0%] text-[5rem] tracking-[-0.04em] leading-[101%]">
        <Link href={"/aboutme"}>INTRO</Link>
      </div>
    </div>
  );
};

export default PfMenu;

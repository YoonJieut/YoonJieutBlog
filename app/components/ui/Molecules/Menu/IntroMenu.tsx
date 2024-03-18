import Li from "@/app/components/ui/Atom/Basic/Li";
import Ul from "@/app/components/ui/Atom/Basic/Ul";
import Link from "next/link";

const IntroMenu = () => {
  return (
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
  );
};

export default IntroMenu;

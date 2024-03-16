import { ClassNameProps } from "@/app/_interfaces/common/CommomProps";
import type { NextPage } from "next";

const AboutMeBackText: NextPage<ClassNameProps> = ({ className }) => {
  const custom = `w-3/4 h-[26.875rem] text-right text-[26.626rem] tracking-[-0.04em] leading-[101%] koulen font-sub-2 opacity-30 ${className}`;
  return <div className={custom}>YoonJieut</div>;
};

export default AboutMeBackText;
``;

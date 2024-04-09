import type { NextPage } from "next";

const PostTitle: NextPage = () => {
  return (
    <div className="w-full relative pl-2 h-[12.5rem] text-left text-[4.375rem] koulen">
      <div className="absolute top-[0%] left-[0%] tracking-[-0.04em] leading-[143%] font-main-1">
        <p className="m-0">never forget,</p>
        <p className="m-0 whitespace-pre-wrap">{`             s for memo `}</p>
      </div>
      <div className="absolute top-[39%] left-[0] text-[7.094rem] tracking-[0.02em] leading-[101%] font-sub-1">
        Post
      </div>
    </div>
  );
};

export default PostTitle;

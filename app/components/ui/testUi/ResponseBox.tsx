import React from "react";

export const ResponseBox = (): JSX.Element => {
  return (
    <div className="relative w-[301px] h-[42px]">
      <div className="fixed w-[301px] h-[42px] top-0 left-0">
        <div className="w-[234px] left-0 bg-[#d9d9d9] rounded-[3px] absolute h-[42px] top-0">
          test
        </div>
        <div className="w-[42px] left-[259px] absolute h-[42px] top-0 bg-[#d9d9d9] flex justify-center items-center">
          {/* <Answer /> */}
        </div>
      </div>
    </div>
  );
};

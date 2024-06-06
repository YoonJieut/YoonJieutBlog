"use client";

import React from "react";

const FormattedSub = ({ sub }: { sub: string }) => {
  return (
    <>
      {sub.split("\n").map((line, index) => {
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>;
      })}
    </>
  );
};
export default FormattedSub;

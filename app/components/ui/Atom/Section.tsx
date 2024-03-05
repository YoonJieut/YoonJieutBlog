"use client";
import React, { ReactNode, CSSProperties } from "react";

interface VerticalLayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Section = ({ children, className, style }: VerticalLayoutProps) => {
  return (
    <section className={`${className}`} style={style}>
      {children}
    </section>
  );
};

export default Section;

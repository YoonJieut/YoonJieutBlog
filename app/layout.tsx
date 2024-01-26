import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YoonJieut",
  description: "YoonJieut의 개인 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

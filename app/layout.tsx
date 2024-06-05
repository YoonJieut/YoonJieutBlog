import type { Metadata } from "next";
import { Noto_Sans_KR, Koulen, Homemade_Apple, Imbue } from "next/font/google";
import "./globals.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "YoonJieut",
  description: "신입 프론트엔드 개발자 윤준현의 포트폴리오 사이트입니다.",
};

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto",
});
const koulen = Koulen({
  subsets: ["latin"], // 또는 preload: false
  weight: "400",
  variable: "--font-koulen",
});
const homemadeApple = Homemade_Apple({
  // subsets: ["latin"],
  preload: false, // 한 단어만 필요하니 preload: false
  weight: "400",
  variable: "--font-homemade",
});
const imbue = Imbue({
  preload: false,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-imbue",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${noto.variable} ${koulen.variable} ${homemadeApple.variable} ${imbue.variable} noto`}
      >
        {children}
      </body>
    </html>
  );
}

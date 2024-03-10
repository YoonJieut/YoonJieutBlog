import type { Metadata } from "next";
import { Noto_Sans_KR, Koulen, Homemade_Apple } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "YoonJieut",
  description: "신입 프론트엔드 개발자 윤준현의 포트폴리오 사이트입니다.",
};

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const noto = Noto_Sans_KR({
  subsets: ["latin"], // 또는 preload: false
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>
      <body
        className={`${noto.variable} ${koulen.variable} ${homemadeApple.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

// 해당 방법은 csr 방식으로 페이지를 불러오는 방식입니다.
// app/page.tsx 또는 pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import sequelize from "../utils/database";
import User from "../models/User";
import Post from "../models/Post";

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    sequelize.sync(); // 여기서 모델을 동기화합니다.
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;

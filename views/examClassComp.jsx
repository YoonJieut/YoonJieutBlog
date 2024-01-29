// app/page.tsx 또는 pages/_app.tsx
import React from "react";
import App from "next/app";
import sequelize from "../utils/database";
import User from "../models/User";
import Post from "../models/Post";

class MyApp extends App {
  static async getServerSideProps({ Component, ctx }) {
    await sequelize.sync(); // 여기서 모델을 동기화합니다.
    return {
      // 기타 필요한 props를 로드합니다.
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;

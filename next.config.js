/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 컴파일러 설정
  compiler: {
    // 콘솔 로그 제거 설정
    removeConsole: {
      // error 로그는 제외하고 제거
      exclude: ["error"],
    },
  },
  // Webpack 설정 확장
  webpack: (config) => {
    // SVG 파일을 처리하기 위한 설정 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // @svgr/webpack 로더를 사용하여 SVG 파일을 React 컴포넌트로 변환
    });
    return config; // 수정된 설정 객체를 반환
  },
  // Next.js 이미지 최적화 설정 추가
  images: {
    formats: ["image/webp"], // WebP 형식으로 이미지를 제공하여 파일 크기 및 로딩 시간 최적화
  },
};

module.exports = nextConfig;

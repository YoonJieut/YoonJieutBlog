import HeaderComp from "../../components/main/HeaderComp";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComp />
      <main>{children}</main>
      <footer>푸터</footer>
    </>
  );
}

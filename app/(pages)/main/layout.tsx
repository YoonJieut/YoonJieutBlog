import IntroduceLayout from "@/app/components/main/IntroduceLayout";
import MenuNav from "../../components/main/MenuNav";
import PostsListContainer from "./@postListContainer/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mainPageRoot w-screen h-screen overflow-x-hidden p-3 ">
      <IntroduceLayout />
      <main className="outline outline-1 flex flex-col space-y-8">
        {children}
      </main>
      <PostsListContainer />
      <MenuNav />
    </div>
  );
}

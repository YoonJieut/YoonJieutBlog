import MainFooter from "@/app/components/ui/Organism/Footer/MainFooter";
import PostsHeader from "@/app/components/ui/Organism/Header/PostsHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="postsRoot w-screen h-screen flex flex-col overflow-hidden pb-[10px]">
      <PostsHeader />
      {children}
      <MainFooter />
    </div>
  );
}

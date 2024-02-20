import PostsHeader from "@/app/components/posts/PostsHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="postsRoot w-screen h-screen">
      <PostsHeader />
      {children}
    </div>
  );
}

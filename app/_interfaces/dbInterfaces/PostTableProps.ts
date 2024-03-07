export interface PostDataProps {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
}

export interface PostIdProps {
  id: number;
}

export interface PostTitleProps {
  title: string;
}

export interface PostContentProps {
  content: string;
}

export interface PostAuthorIdProps {
  authorId: number;
}

export interface Post
  extends PostIdProps,
    PostTitleProps,
    PostContentProps,
    PostAuthorIdProps {}

export interface PostTableProps {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

// 이 인터페이스는 데이터와 상호작용할 때 쓰이는 인터페이스입니다.
export interface InteractPost
  extends PostTitleProps,
    PostContentProps,
    PostAuthorIdProps {}

// app/admin/@newPosts/page.tsx
// Props 타입을 정의하여 TypeScript의 타입 체킹 기능을 활용합니다.
export interface NewPostsPageProps {
  addEvent: (title: string, content: string, authorId: number) => Promise<void>;
  title: string;
  content: string;
  authorId: number;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setAuthorId: (authorId: number) => void;
}

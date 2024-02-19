export interface PostTableProps {
  id: number;
  title: string;
  content: string;
  authorId: number;
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

// 이 인터페이스는 데이터와 상호작용할 때 쓰이는 인터페이스입니다.
export interface InteractPost
  extends PostTitleProps,
    PostContentProps,
    PostAuthorIdProps {}

// app/admin/@newPosts/page.tsx
// Props 타입을 정의하여 TypeScript의 타입 체킹 기능을 활용합니다.
export interface NewPostsPageProps {
  addEvent: (newPost: InteractPost) => void;
  title: string;
  content: string;
  authorId: number | null;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setAuthorId: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface NewPostsPageProps1 {
  addEvent: (newPost: InteractPost) => void;
  title: string;
  content: string;
  authorId: number;
  setTitle: (title: string) => void; // Add the parameter for the title
  setContent: (content: string) => void; // Add the parameter for the content
  setAuthorId: (authorId: number) => void; // Add the parameter for the authorId
}

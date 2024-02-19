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

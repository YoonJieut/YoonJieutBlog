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

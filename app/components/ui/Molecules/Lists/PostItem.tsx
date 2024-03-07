import {
  PostAuthorIdProps,
  PostContentProps,
  PostIdProps,
  PostTitleProps,
} from "@/app/_interfaces/dbInterfaces/PostTableProps";
import { shuffleArray } from "@/app/utils/suffleArray";

// todo : 나중에 여기에 이미지를 추가해야 한다.
// 그 이미지의 내용이 호버 됐을 때 크기가 조금씩 커지는 등의 상호작용도 넣을 예정

interface PostItemProps
  extends PostIdProps,
    PostTitleProps,
    PostContentProps,
    PostAuthorIdProps {}

const PostItem: React.FC<{ post: PostItemProps }> = ({ post }) => {
  const shuffledItems = shuffleArray([post.title, post.content, post.authorId]);

  return (
    <li className="flex space-x-4">
      {shuffledItems.map((item, index) => {
        let style: React.CSSProperties = {};
        let content = item;

        if (item === post.title) {
          style = { fontWeight: "bold" };
        } else if (item === post.content) {
          style = {
            fontSize: "0.9rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          };
        } else if (item === post.authorId) {
          style = { fontStyle: "italic", fontSize: "0.9rem" };
          content = item === 1 ? "작성자 : Admin" : "작성자 : User";
        }

        return (
          <span key={index} style={style} className="outline outline-1 p-2">
            {content}
          </span>
        );
      })}
    </li>
  );
};

export default PostItem;

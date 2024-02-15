import {
  PostAuthorIdProps,
  PostContentProps,
  PostIdProps,
  PostTitleProps,
} from "@/app/_interfaces/PostTableProps";
import { shuffleArray } from "@/app/utils/suffleArray";

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

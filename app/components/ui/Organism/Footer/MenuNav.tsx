// todo : 이벤트 경로를 위해서 next/link 사용할 것
import Link from "next/link";

export default function MenuNav() {
  return (
    <div className="menuNav w-full h-8 outline outline-1 flex justify-between items-center px-3">
      <ul className="menuNavLeft flex gap-6">
        <li>
          <Link href="/main">Home</Link>
        </li>
        <li>
          <Link href="/posts">Post</Link>
        </li>
        <li>
          <Link href="/admin">Admin도 그냥 살펴보세용</Link>
        </li>
      </ul>
      <p>©copyright All rights reserved.</p>
      <ul className="menuNavRight flex gap-6">
        <li>
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}

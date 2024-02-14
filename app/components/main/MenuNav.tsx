// todo : 이벤트 경로를 위해서 next/link 사용할 것

export default function MenuNav() {
  return (
    <div className="menuNav w-full h-8 outline outline-1 flex justify-between items-center px-3">
      <ul className="menuNavLeft flex gap-6">
        <li>Home</li>
        <li>Post</li>
        <li>Admin</li>
      </ul>
      <ul className="menuNavRight flex gap-6">
        <li>Contact Me</li>
      </ul>
    </div>
  );
}

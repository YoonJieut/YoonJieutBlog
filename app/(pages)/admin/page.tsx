import NewPostsPage from "./@newPosts/page";
export default function AdminPage() {
  return (
    <div className="w-full h-full p-4 flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">메인 페이지</h1>
      <ul className="w-full h-1/2 flex space-x-3 ">
        <li className="outline outline-1 flex-1">
          <NewPostsPage />
        </li>
        <li className="outline outline-1 flex-1"></li>
      </ul>
      <ul className="w-full h-1/2 flex space-x-3">
        <li className="outline outline-1 flex-1"></li>
        <li className="outline outline-1 flex-1"></li>
      </ul>
    </div>
  );
}

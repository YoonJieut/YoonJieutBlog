import Image from "next/image";

interface ImgCardProps {
  imgUrl: string;
  imgTitle: string;
  imgSub: string;
}

const ImgCard: React.FC<ImgCardProps> = ({ imgUrl, imgTitle, imgSub }) => {
  return (
    <div className="imgCard outline outline-1">
      <div className="imgArea">
        <Image src={imgUrl} alt={imgTitle} width={100} height={200} />
      </div>
      <ul className="imgSubBar flex justify-between items-center h-8 outline outline-1 ">
        <li className="imgSubBarTitle text-left">{imgTitle}</li>
        <li className="imgSubBarSub text-right">{imgSub}</li>
      </ul>
    </div>
  );
};
export default ImgCard;

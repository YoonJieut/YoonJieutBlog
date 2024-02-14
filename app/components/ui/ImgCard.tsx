import Image from "next/image";

interface ImgCardProps {
  imgUrl: string;
  imgTitle: string;
  imgSub: string;
  className?: string;
}

const ImgCard: React.FC<ImgCardProps> = ({
  imgUrl,
  imgTitle,
  imgSub,
  className,
}) => {
  const classNameProps = `imgCard ${className}`;
  return (
    <div className={classNameProps}>
      <div className="imgArea">
        <Image src={imgUrl} alt={imgTitle} width={200} height={200} />
      </div>
      <ul className="imgSubBar flex justify-between items-center h-8 outline outline-1 ">
        <li className="imgSubBarTitle text-left">{imgTitle}</li>
        <li className="imgSubBarSub text-right">{imgSub}</li>
      </ul>
    </div>
  );
};
export default ImgCard;

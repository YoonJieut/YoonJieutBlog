import Image from "next/image";

interface ImgCardProps {
  imgUrl: string;
  imgTitle: string;
  imgSub: string;
  imgWidth: string | number;
  imgHeight: string | number;
  className?: string;
}

const ImgCard: React.FC<ImgCardProps> = ({
  imgUrl,
  imgTitle,
  imgSub,
  imgWidth,
  imgHeight,
  className,
}) => {
  const classNameProps = `imgCard ${className}`;
  return (
    <div className={classNameProps}>
      <div className="imgArea flex justify-center items-center">
        <Image
          src={imgUrl}
          alt={imgTitle}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
      <ul className="imgSubBar flex justify-between items-center h-8 ">
        <li className="imgSubBarTitle text-left opacity-45  active:opacity-100 duration-200">
          {imgTitle}
        </li>
        <li className="imgSubBarSub text-right opacity-45 active:opacity-100 duration-200">
          {imgSub}
        </li>
      </ul>
    </div>
  );
};
export default ImgCard;

// app/components/ui/detailLine.tsx
// 한줄 설명: 선을 그리는 컴포넌트

interface DetailLineProps {
  className?: string;
}

const DetailLine: React.FC<DetailLineProps> = ({ className }) => {
  return (
    <div
      className={`detailLine border-b-2 border-gray-300 my-5 ${className}`}
    ></div>
  );
};

export default DetailLine;

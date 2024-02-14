import ImgCard from "@/app/components/ui/ImgCard";
import ModalBtn from "../../components/ui/ModalBtn";

// 모달버튼은 이벤트를 전달할 때, 부모 client 컴포넌트로 교체해야 한다.

export default function MainPage() {
  return (
    <>
      <ImgCard imgUrl="/images/textCursor.png" imgTitle="dksd" imgSub="sub" />
      <ModalBtn>모달버튼</ModalBtn>
    </>
  );
}

import ImgCard from "@/app/components/ui/ImgCard";
import ModalBtn from "../../components/ui/ModalBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// 모달버튼은 이벤트를 전달할 때, 부모 client 컴포넌트로 교체해야 한다.

export default function MainPage() {
  return (
    <>
      <ImgCard imgUrl="/images/textCursor.png" imgTitle="dksd" imgSub="sub" />
      <ModalBtn content="view more">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check"
          style={{ color: "red" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="fas fa-pen-to-square"
          style={{ color: "#c9c9c9" }}
        />
      </ModalBtn>
    </>
  );
}

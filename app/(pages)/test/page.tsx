import ImgAndSub from "@/app/components/ui/Organism/Container/ImgAndSub";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
import TextAlignLeftOrRight from "@/app/components/ui/Molecules/Text/TextAlignLeftOrRight";

const TestPage = () => {
  return (
    <div className="text flex w-screen h-screen overflow-x-hidden">
      <div className="menuPart w-1/2 h-full OutLine">MenuPart</div>
      <section className="contentPart w-1/2 flex flex-col">
        <ImgCard
          imgUrl="/images/textCursor.png"
          imgTitle="메인 페이지의 모습"
          imgSub=""
          imgWidth={400}
          imgHeight={400}
          className="w-full OutLine"
        />
        <TextAlignLeftOrRight align="left">
          <p>
            이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미 텍스트 들이
            들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미 텍스트
            들이 들어갑니다.
          </p>
        </TextAlignLeftOrRight>
        <TextAlignLeftOrRight align="right">
          <p>
            이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미 텍스트 들이
            들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미 텍스트
            들이 들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미
            텍스트 들이 들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.이곳에
            더미 텍스트 들이 들어갑니다.
          </p>
        </TextAlignLeftOrRight>
        <ImgAndSub />
      </section>
    </div>
  );
};

export default TestPage;

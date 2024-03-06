import ImgAndSub from "@/app/components/ui/Organism/Container/ImgAndSub";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
import TextAlignLeftOrRight from "@/app/components/ui/Molecules/Text/TextAlignLeftOrRight";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import H3 from "@/app/components/ui/Atom/Basic/H3";
import H1 from "@/app/components/ui/Atom/Basic/H1";

const TestPage = () => {
  return (
    <div className="text flex w-screen h-screen overflow-x-hidden">
      <div className="menuPart w-1/2 h-full OutLine flex flex-col gap-4">
        <ArrowBtns />
        <H1 className="Oswald" text="PF1" />
      </div>
      <section className="contentPart w-1/2 flex flex-col gap-10">
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
            들이 들어갑니다. 이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미
            텍스트 들이 들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.
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
        <ImgAndSub imgClass="w-2/5">
          <p>
            곳에 더미 텍스트 들이 들어갑니다.이곳에 더미 텍스트 들이
            들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미 텍스트
            들이 들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.이곳에 더미
            텍스트 들이 들어갑니다.이곳에 더미 텍스트 들이 들어갑니다.이곳에
            더미 텍스트 들이 들어갑니다.
          </p>
        </ImgAndSub>
      </section>
    </div>
  );
};

export default TestPage;

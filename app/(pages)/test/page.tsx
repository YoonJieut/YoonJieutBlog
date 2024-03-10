import DotLine from "@/app/components/ui/design/dotLine";
import MainFooter from "@/app/components/ui/Organism/Footer/MainFooter";
import EntryShadowBar from "../../components/ui/design/EntryShadowBar";
import Corner from "@/app/components/ui/design/Corner";
import { AdminSideNav } from "../../components/ui/Organism/SideNav/AdminSideNav";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";
import TextPfSummary from "@/app/components/ui/Molecules/Text/TextPfSummary";
import PostTitle from "@/app/components/ui/design/PostTitle";
import AboutMeBackText from "@/app/components/ui/design/AboutMeBackText";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import PfInfo from "@/app/components/ui/Molecules/Lists/PfInfo";
import TextAlignLeftOrRight from "@/app/components/ui/Atom/Basic/Flex";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";
import PfMenu from "../../components/ui/Molecules/Menu/PfMenu";

const TestPage = () => {
  return (
    <>
      <EntryShadowBar />
      <DotLine />
      <MainFooter />
      <Corner />
      <AdminSideNav />
      <PostTitle />
      <AboutMeBackText />
      <ArrowBtns />
      <PfInfo title="title" stackArray={["stack1", "stack2"]} />
      <TextAlignLeftOrRight align="left">
        <div>left</div>
      </TextAlignLeftOrRight>
      <TextAlignLeftOrRight align="right">
        <div>right</div>
      </TextAlignLeftOrRight>
      <TextAlign type="left" title="왼쪽 정렬 제목">
        왼쪽 정렬 내용 Lorem ipsum dolor sit ame tconsectetur. Eget ultrices
        arcu sed amet nulla sit est. Tortor magna mi nam accumsan curabitur in
        turpis. Malesuada tincidunt viverra donec at morbi pharetra sollicitudin
        auctor ullamcorper. Neque nibh eu at tristique. Neque =
      </TextAlign>
      <TextAlign type="right" title="right쪽 정렬 제목">
        왼쪽 정렬 내용 Lorem ipsum dolor sit ame tconsectetur. Eget ultrices
        arcu sed amet nulla sit est. Tortor magna mi nam accumsan curabitur in
        turpis. Malesuada tincidunt viverra donec at morbi pharetra sollicitudin
        auctor ullamcorper. Neque nibh eu at tristique. Neque =
      </TextAlign>
      <TextAlign type="center" title="center 정렬 제목">
        왼쪽 정렬 내용 Lorem ipsum dolor sit ame tconsectetur. Eget ultrices
        arcu sed amet nulla sit est. Tortor magna mi nam accumsan curabitur in
        turpis. Malesuada tincidunt viverra donec at morbi pharetra sollicitudin
        auctor ullamcorper. Neque nibh eu at tristique. Neque =
      </TextAlign>
      <PfMenu />
    </>
  );
};

export default TestPage;

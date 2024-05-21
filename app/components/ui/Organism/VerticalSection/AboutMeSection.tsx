import Section from "../../atom/Basic/Section";

const AboutMeSection = ({
  rgbInt,
  blurPx,
}: {
  rgbInt: number | string;
  blurPx: number | string;
}) => {
  return (
    <Section className="w-1/4 h-full border border-lightgray">
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `rgba(${rgbInt}, ${rgbInt},${rgbInt}, 0.50)`,
          backdropFilter: `blur(${blurPx}px)`,
        }}
      />
    </Section>
  );
};
export default AboutMeSection;

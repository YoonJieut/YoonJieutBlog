export default function LargeTextTest(text: string) {
  const textNode = `Welcome ${text}`;
  return (
    <p
      className="Imbue block w-full h-full text-nowrap"
      style={{
        fontSize: "390px",
        letterSpacing: "-20px",
        lineHeight: "0.6",
        fontWeight: "bold",
      }}
    >
      {textNode}
    </p>
  );
}

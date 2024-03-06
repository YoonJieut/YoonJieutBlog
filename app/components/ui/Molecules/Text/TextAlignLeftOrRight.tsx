interface TextAlignLeftProps {
  children: React.ReactNode;
  align: "left" | "right";
}

const TextAlignLeftOrRight: React.FC<TextAlignLeftProps> = ({
  children,
  align,
}) => {
  return (
    <>
      {align === "left" && (
        <div className="OutLine w-full h-1/6 flex justify-start items-start">
          <div className="OutLine w-1/3">{children}</div>
        </div>
      )}

      {align === "right" && (
        <div className="OutLine w-full h-1/6 flex justify-end items-end">
          <div className="OutLine w-1/3">{children}</div>
        </div>
      )}
    </>
  );
};

export default TextAlignLeftOrRight;

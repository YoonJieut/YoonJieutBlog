interface FlexProps {
  children: React.ReactNode;
  align: "left" | "right" | "between";
}

const Flex: React.FC<FlexProps> = ({ children, align }) => {
  return (
    <>
      {align === "left" && (
        <div className=" w-full flex justify-start items-start">{children}</div>
      )}

      {align === "right" && (
        <div className=" w-full flex justify-end items-end">{children}</div>
      )}

      {align === "between" && (
        <div className=" w-full flex justify-between items-start">
          {children}
        </div>
      )}
    </>
  );
};

export default Flex;

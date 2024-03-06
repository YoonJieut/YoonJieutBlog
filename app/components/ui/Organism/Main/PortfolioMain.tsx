import PfList from "@/app/components/ui/Molecules/Lists/PfList";
import pfListData from "@/public/json/pfListData.json";

const PortfolioMain = () => {
  console.log("testing - ", pfListData.pfListData);
  const data = pfListData.pfListData;

  return (
    <div className="pfRoot w-full h-full flexCenter py-8 px-12">
      <div className="pfcontainer OutLine flex gap-4 h-full w-full">
        <div className="OutLine w-1/2 h-full overflow-x-hidden">
          이미지 자리입니다.
        </div>
        <div className="pfListPart flex flex-col flex-1 w-1/2 h-full justify-center">
          {data.map((item) => (
            <PfList
              key={item.index}
              index={item.index}
              stackArray={item.stackArray}
            >
              {item.children}
            </PfList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;

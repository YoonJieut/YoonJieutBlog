import PfList from "@/app/components/ui/Molecules/PfList";
import pfListData from "@/public/json/pfListData.json";

const PortFolioPage = () => {
  console.log("testing - ", pfListData.pfListData);
  const data = pfListData;

  return (
    <div className="pfRoot flex w-full h-full gap-4">
      <div className="w-1/2 h-full"></div>
      <div className="pfListPart flex flex-col flex-1 w-1/2 h-full justify-center">
        {/* {pfListData.map((item) => (
          <PfList
            key={item.index}
            index={item.index}
            stackArray={item.stackArray}
          >
            {item.children}
          </PfList>
        ))} */}
      </div>
    </div>
  );
};

export default PortFolioPage;

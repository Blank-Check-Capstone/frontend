import CancelIcon from "../../CancelIcon";
import MenuInfo from "./Detail/MenuInfo";
import MenuOptionList from "./Detail/MenuOptionList";

const MenuDetail = () => {
  return (
    <div className="w-full h-full fixed flex justify-center items-center z-10">
      <div className="w-[80%] h-[75%] flex flex-col rounded-lg bg-white relative z-[2]">
        <div className="w-full flex-1 flex p-[0.5vw]">
          <div className="w-full h-full flex gap-[2.5vw] p-[2vw] pr-0">
            <MenuInfo />
            <div className="w-[0.1vw] h-full bg-[#E2E2E2]"></div>
            <MenuOptionList />
          </div>
          <div className="w-[4vw] flex justify-center">
            <CancelIcon className="stroke-[1] w-[3.3vw] h-[3.3vw]" />
          </div>
        </div>
        <div className="w-full h-[7vw] px-[0.5vw] border-t-[0.1vw] border-t-[#E2E2E2]">
          <div className="h-full float-right flex items-center gap-[2vw]">
            <div className="text-[2.3vw] font-semibold">7,000원</div>
            <div className="py-[1vw] px-[4.5vw] bg-[#27CACA] text-white text-[1.7vw] font-medium rounded-md">
              담기
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"></div>
    </div>
  );
};

export default MenuDetail;

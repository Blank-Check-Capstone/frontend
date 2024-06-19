import CancelIcon from "../components/CancelIcon";
import RightArrow from "../assets/images/RightArrowIcon";
import DivideAmount from "../components/DivideAmount";
import PlusIcon from "../assets/images/PlusIcon";
import { useNavigate } from "react-router-dom";

const DutchPay = () => {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div className="w-screen h-screen flex flex-col py-[5vw]">
      <div className="flex gap-[3vw] w-full h-[5vw] bg-gray-950 items-center justify-between fixed top-0 left-0">
        <div className="flex gap-10 w-full h-[5vw] bg-gray-950 items-center">
          <div className="text-[2vw] font-semibold text-white ml-[10px]">
            Table. 1번
          </div>
          <div className="text-[1.5vw] text-[#4cbebc]">01. 금액입력</div>
          <div className="text-[#808080] text-[1.2vw]">▶</div>
          <div className="text-[1.5vw] text-[#808080]">02. 결제하기</div>
          <div className="text-[#808080] text-[1.2vw]">▶</div>
          <div className="text-[1.5vw] text-[#808080]">03. 결제완료</div>
        </div>
        <div
          className="w-[4vw] h-[4vw] text-white mr-[1vw] hover:cursor-pointer"
          onClick={moveBack}
        >
          <CancelIcon />
        </div>
      </div>

      <div className="w-full h-full bg-[#e2e2e2] p-[1vw] px-[5vw]">
        <div className=" flex justify-between">
          <div className="">
            <div className="flex font-medium">
              <p className="text-[1.5vw]">총 결제금액</p>
              <p className="text-[3vw] ml-[1vw] mt-[-0.5vw]">8,000</p>
              <p className="text-[1.5vw]">원</p>
            </div>
          </div>
          <div className="flex">
            <p className="flex justify-center items-center text-[2vw] mr-[1vw]">
              분할기준
            </p>
            <div className="bg-white w-[10vw] h-[4vw] rounded-l-[0.3vw] text-[1.5vw] flex justify-center items-center font-semibold">
              <p className="text-black">메뉴별 나눔</p>
            </div>
            <div className="bg-black w-[10vw] h-[4vw] rounded-r-[0.3vw] text-[1.5vw] flex justify-center items-center">
              <p className="text-white">종류별 나눔</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[2vw]">
          <DivideAmount />
          <DivideAmount />
          <div className="mt-[2vw]">
            <div className="bg-[#aeafaf] w-[17vw] h-[14vw] p-[1vw] rounded-lg flex justify-center items-center gap-[0.7vw] border-white border shadow-[1px_1px_3px_2px_rgba(0,0,0,0.3)] hover:cursor-pointer">
              <div className="w-[2.7vw] h-[2.7vw] ">
                <PlusIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-full h-[5vw] bg-white fixed bottom-0 left-0 flex justify-end hover:cursor-pointer border-gray-400 border">
        <div className="flex justify-center items-center bg-[#979797] w-[15vw] h-full">
          <p className="text-white flex text-[2vw] items-center justify-center font-semibold">
            결제하기
            <div className="w-[1.8vw] h-[1.8vw] text-white flex">
              <RightArrow />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DutchPay;

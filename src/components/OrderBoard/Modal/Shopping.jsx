import CancelIcon from "../../CancelIcon";
import MinusIcon from "../../MinusIcon";
import CheckIcon from "../../CheckIcon";

const Shopping = () => {
    return (
    <div className="w-full h-full fixed z-10">
        <div className="w-[45vw] h-full bg-white absolute top-0 right-0 z-[2]">
            <div className="h-[10%] flex items-center justify-between border-b border-[#E2E2E2] border-solid ">
                <div>
                    <div className="flex p-[1.2vw] ml-[10px] text-2xl text-[#B0B0B0]">
                        장바구니(<div>0</div>)
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-[90%] h-[70%] bg-[#D9D9D9] text-[#929292] rounded-3xl font-light leading-[3vw] text-center px-3 hover: cursor-pointer">장바구니 비우기</div>
                    <div className="hover: cursor-pointer w-[4vw] h-[4vw] flex mr-[10px]">
                        <CancelIcon />
                    </div>
                </div>
            </div>

            <div className="w-full h-[55%]">
                <div className="w-full h-[37%] border-b border-[#E2E2E2] border-solid">
                    <div className="font-bold text-2xl p-[1.5vw]">짜장면</div>
                    <div>
                        <div>
                            
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="w-full h-[37%]">
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="w-full h-[37%]">
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="bg-[#DEDEDE] w-full h-[7%] flex">
                <div className="flex items-center ml-5 gap-4">
                    <CheckIcon />
                    <p className="font-bold text-[#5F5F5F]">상품 할인권 사용</p>
                </div>
            </div>

            <div className="w-full h-[14%] flex justify-between px-10">
                <div className="text-[#A8A8A8] text-2xl mt-[2vw]">
                    총 금액
                </div>
                <div className="text-3xl mt-[2vw] flex">
                    <p className="font-bold">7,000</p><p className="text-xl leading-10">원</p>
                </div>
            </div>

            <div className="bg-blue-300 w-full h-[14%] flex text-white">
                <div className="bg-[#505050] w-[25%] h-full flex items-center justify-center text-3xl">
                    <p>선물</p>
                </div>
                <div className="bg-black w-[25%] h-full flex items-center justify-center text-3xl">
                    포장
                </div>
                <div className="bg-[#27CACA] w-[50%] h-full flex items-center justify-center text-3xl">
                    주문하기
                </div>
            </div>
        </div>
        <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"></div>
    </div>
  );
};

export default Shopping;

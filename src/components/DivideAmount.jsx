import CancelIcon from "../components/CancelIcon";

const DivideAmount = () => {
    return (
            <div className="mt-[2vw]">
                <div className="bg-white w-[17vw] h-[14vw] p-[1vw] rounded-lg flex flex-col gap-[0.7vw] shadow-[1px_1px_3px_2px_rgba(0,0,0,0.3)]">
                    <div className="flex justify-between items-center">
                        <p className="text-[1.1vw]">나눌 금액</p>
                        <div className="w-[1.5vw] h-[1.5vw] bg-gray-400 rounded-full hover:cursor-pointer">
                            <CancelIcon />
                        </div>
                    </div>
                    <div className="flex items-center h-[5vw] bg-gray-200 border-gray-400 border rounded-[0.2vw]">
                        <p className="text-[2.5vw] ml-[1vw] font-medium">4000</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div className="border-gray-400 border rounded-lg w-[7vw] h-[3.5vw] flex justify-center items-center hover:cursor-pointer">
                            <p className="text-[1.2vw] font-semibold">현금결제</p>
                        </div>
                        <div className="border-gray-400 border rounded-lg w-[7vw] h-[3.5vw] flex justify-center items-center hover:cursor-pointer">
                            <p className="text-[1.2vw] font-semibold">카드결제</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DivideAmount;
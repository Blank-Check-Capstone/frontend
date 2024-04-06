import gifts_image from "../../assets/images/gifts_image.png";

const Main = () => {
    return <div className="w-[86%] h-full ml-[14%]">
        <div className="fixed top-0 flex w-[86%] h-[10%] border-b-4 border-[#F1F1F1] bg-white">
            <div className="w-[7%] h-full bg-white items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[40px] h-[40px] fill-[#F1F1F1]" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="M16.041,24,6.534,14.48a3.507,3.507,0,0,1,0-4.948L16.052,0,18.17,2.121,8.652,11.652a.5.5,0,0,0,0,.707l9.506,9.52Z"/>
                </svg>
            </div>
            <div className="flex-1 flex flex-nowrap overflow-x-scroll whitespace-nowrap">
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
                <div className="flex-1 flex items-center justify-center px-6 py-2">가나다라</div>
            </div>
            <div className="w-[7%] h-full bg-white items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[40px] h-[40px] fill-[#F1F1F1]" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/>
                </svg>
            </div>
        </div>

        <div className="w-full h-[80%]">
            <div className="w-full h-[10%] bg-[#D9D9D9] flex items-center text-[25px] p-5 mt-[10%]">
                면류
            </div>
            <div className="flex justify-center gap-5 mt-[2%]">
                <div className="h-[300px] w-[31%] bg-[#D9D9D9] flex justify-center">
                    <div className="w-[90%] h-[60%] bg-white mt-[5%]">
                    </div>
                </div>
                <div className="h-[300px] w-[31%] bg-[#D9D9D9]"></div>
                <div className="h-[300px] w-[31%] bg-[#D9D9D9]"></div>
            </div>

            <div className="flex justify-center gap-5 mt-[5%]">
                <div className="h-[300px] w-[31%] bg-[#D9D9D9] flex justify-center">
                    <div className="w-[90%] h-[60%] bg-white mt-[5%]">
                    </div>
                </div>
                <div className="h-[300px] w-[31%] bg-[#D9D9D9]"></div>
                <div className="h-[300px] w-[31%] bg-[#D9D9D9]"></div>
            </div>
        </div>

        <div className="fixed bottom-0 w-[86%] h-[10%] border-t-4 border-[#F1F1F1] bg-white flex items-center px-[1%] gap-3">
            <div className="w-[15%] h-[75%] border-2 border-[#DBDBDB]  bg-white rounded-[10px] flex items-center justify-center gap-2 ">
                <img src={gifts_image} alt="선물하기 사진" className="w-[29px] h-[31px]"/>
                <div className="text-[#DFDFDF] text-[20px] font-bold">기프티콘</div>
            </div>
            <div className="w-[15%] h-[75%] border-2 border-[#DBDBDB]  bg-white rounded-[10px] flex items-center justify-center gap-5 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 34 34" fill="none">
                    <rect y="6.10352e-05" width="34" height="6" fill="#D9D9D9"/>
                    <rect y="14.0001" width="34" height="6" fill="#D9D9D9"/>
                    <rect y="28.0001" width="34" height="6" fill="#D9D9D9"/>
                </svg>
                <div className="text-[#DFDFDF] text-[20px] font-bold">주문내역</div>
            </div>
            <div className="w-[20%] h-[75%] bg-[#27CACA] rounded-[10px] flex items-center justify-center gap-5 ">
                <div className="text-white text-[20px] font-bold">주문하기</div>
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-[#27CACA]">0</div>
            </div>
        </div>
    </div>
}

export default Main;
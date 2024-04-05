const Main = () => {
    return <div className="w-[86%] h-full">
        <div className="flex w-full h-[10%] border-b-4 border-[#F1F1F1] bg-white">
            <div className="w-[7%] h-full bg-red-900"></div>
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
            <div className="w-[7%] h-full bg-red-900"></div>
        </div>
        <div className="w-full h-[80%]">

        </div>
        <div className="w-full h-[10%] border-t-4 border-[#F1F1F1] bg-white flex items-center justify-end px-[1%] gap-3">
            <div className="w-[15%] h-[75%] border-2 border-[#DBDBDB]  bg-white rounded-[10px] flex items-center justify-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 34 34" fill="none">
                    <rect y="6.10352e-05" width="34" height="6" fill="#D9D9D9"/>
                    <rect y="14.0001" width="34" height="6" fill="#D9D9D9"/>
                    <rect y="28.0001" width="34" height="6" fill="#D9D9D9"/>
                </svg>
                <div className="text-[#DFDFDF] text-[20px] font-bold">주문내역</div>
            </div>
            <div className="w-[20%] h-[75%] bg-[#27CACA] rounded-[10px] flex items-center justify-center gap-5">
                <div className="text-white text-[20px] font-bold">주문하기</div>
                <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-[#27CACA]">0</div>
            </div>
        </div>
    </div>
}

export default Main;
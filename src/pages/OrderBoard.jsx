import Main from "../components/OrderBoard/Main";
import KoreanFlag from "../assets/images/KoreanFlag.png";

const OrderBoard = () => {
    return (
        <div className="flex w-full h-screen">
            <div className="fixed top-0 w-[14%] h-full bg-[#D9D9D9]">
                <div className="w-[100%] h-[30%] bg-[#000] flex flex-col gap-3 items-center justify-center">
                    <div className="w-[60%] h-[60%] rounded-[30%] bg-white"></div>
                    <div className="text-white text-3xl font-semibold">선불1</div>
                </div>
                <div className="h-[70%] flex flex-col justify-between">

                    <div className="h-full flex flex-col">
                        <div className="flex h-[18%] w-[100%] items-center gap-8 border-l-8 border-[#46B0AE] pl-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="37" viewBox="0 0 52 37" fill="none">
                                <rect y="32.3099" width="52" height="4.69014" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.8982 31.0071C49.1949 17.8487 38.0574 5.86275 25.9181 5.86275C13.7789 5.86275 3.22485 17.2624 4.06777 30.942L47.8982 31.0071Z" fill="white"/>
                                <ellipse cx="25.9354" cy="3.77823" rx="3.7606" ry="3.77817" fill="white"/>
                            </svg>
                            <div>메뉴주문</div>
                        </div>
                        
                        <div className="flex h-[18%] w-[100%] items-center justify-center">
                            <img src={KoreanFlag} alt="태극기" className="h-[60%] w-[25%] mr-10" />
                            <div className="mr-5 text-xl">FUN</div>
                        </div>
                        
                        <div className="flex h-[18%] w-[100%] items-center justify-center gap-5">
                            <img src={KoreanFlag} alt="태극기" className="h-[60%] w-[25%] ml-1" />
                            <div className="mr-5 text-xl pl-3">LANG</div>
                        </div>

                        <div className="flex flex-1 items-center justify-center mt-[40%]">
                            <div className="bg-[#46B0AE] text-white rounded-[50%] w-[70%] h-[100%] mb-[35%] flex justify-center items-center">
                                <div className="text-center">직원<br />호출</div>
                            </div>
                        </div>  
                    </div>    
                </div>
            </div>
            <Main/>
        </div>
    )
};

export default OrderBoard
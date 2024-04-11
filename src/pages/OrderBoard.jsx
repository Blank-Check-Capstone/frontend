import Main from "../components/OrderBoard/Main";
import KoreanFlag from "../assets/images/KoreanFlag.png";

const OrderBoard = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="fixed flex flex-col top-0 w-[15vw] h-full bg-[#393939]">
        <div className="w-[100%] h-[20vw] bg-[#000] max-h-60 flex flex-col gap-2 items-center justify-center">
          <div className="w-[10vw] h-[10vw] max-w-40 max-h-40 rounded-[30%] bg-white"></div>
          <div className="text-white text-3xl font-semibold">선불1</div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-full flex flex-col overflow-auto">
            <div className="flex h-[7vw] w-[100%] items-center gap-[1.2vw] border-l-[0.5vw] border-[#46B0AE] pl-[2vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 37"
                fill="none"
                className="w-[4vw] h-[4vw]"
              >
                <rect y="32.3099" width="52" height="4.69014" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M47.8982 31.0071C49.1949 17.8487 38.0574 5.86275 25.9181 5.86275C13.7789 5.86275 3.22485 17.2624 4.06777 30.942L47.8982 31.0071Z"
                  fill="white"
                />
                <ellipse
                  cx="25.9354"
                  cy="3.77823"
                  rx="3.7606"
                  ry="3.77817"
                  fill="white"
                />
              </svg>
              <div className="text-[1.8vw] font-medium text-white">
                메뉴주문
              </div>
            </div>

            <div className="flex h-[7vw] w-[100%] pl-[2vw] items-center gap-[1vw]">
              <img src={KoreanFlag} alt="태극기" className="h-[5vw] w-[5vw]" />
              <div className="text-[1.8vw] font-medium text-[#ADADAD]">FUN</div>
            </div>

            <div className="flex h-[7vw] w-[100%] pl-[2vw] items-center gap-[1vw]">
              <img src={KoreanFlag} alt="태극기" className="h-[5vw] w-[5vw]" />
              <div className="text-[1.8vw] font-medium text-[#ADADAD]">
                LANG
              </div>
            </div>
          </div>
          <div className="flex flex-1 w-[15vw] h-[15vw] items-center justify-center">
            <div className="bg-[#46B0AE] text-white rounded-[50%] w-[12vw] h-[12vw] flex justify-center items-center">
              <div className="text-center text-[1.8vw]">
                직원
                <br />
                호출
              </div>
            </div>
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
};

export default OrderBoard;

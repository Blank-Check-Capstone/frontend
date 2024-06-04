import { useNavigate } from "react-router-dom";
import blackNooles from "../../assets/images/blackNooles.jpg";
const OrderLog = () => {
  const navigate = useNavigate();

  const pageBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen pt-[5vw]">
      <div className="flex items-center w-full h-[5vw] bg-black text-white fixed top-0 left-0">
        <div className="flex w-full h-full items-center">
          <div className="w-[15%] h-full bg-[#393939] text-[2vw] font-bold flex items-center justify-center">
            Table 중식당
          </div>
          <div className="h-full flex items-center justify-between px-[1vw] text-[2vw] font-bold">
            결제 대기중입니다.
          </div>
        </div>
        <div onClick={pageBack}>
          <svg
            className="w-[3vw] h-[3vw] fill-[#F1F1F1] mx-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </div>
      </div>

      {/* <div className="flex w-full h-[90%] items-center justify-center">
        <div className="text-black text-[4vw] font-bold">
          주문내역이 없습니다.
        </div>
      </div> */}
      <div className="text-black text-[4vw] font-bold fixed w-full py-[5vw] bg-white">
        <div className="w-full h-full flex items-center justify-center">
          직원이 직접 결제 받으러 옵니다. 결제 준비 해주세요.
        </div>
      </div>
      <div className="flex w-full h-full items-center flex-col ">
        <div className="w-[85%] grid grid-cols-4 font-bold gap-5">
          <div>
            <img
              src={blackNooles}
              className="h-[5vw] w-[5vw] rounded-xl mb-2"
            />
            <div className="text-[1.5vw] font-bold">
              <div>짜장면</div>
              <div>8,000원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10%] bg-black bottom-0 flex items-center justify-center text-[2vw] fixed">
        <div className="text-white flex">
          Total<div className="text-[#40d7e1]">&ensp;100</div>원
        </div>
      </div>
    </div>
  );
};

export default OrderLog;

const OrderLog = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full h-[10%] bg-black text-white">
        <div className="w-[15%] h-full bg-[#393939] text-3xl font-bold flex items-center justify-center">
          Table 중식당
        </div>
        <div className="w-[85%] h-full flex items-center justify-between px-5">
          <div className=" text-2xl font-bold">결제 대기중입니다.</div>
          <svg
            className="w-[3vw] h-[3vw] fill-[#F1F1F1] mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </div>
      </div>
      <div className="flex w-full h-[90%] items-center justify-center">
        <div className="text-black text-5xl mb-[10%] font-bold">
          주문내역이 없습니다.
        </div>
      </div>
    </div>
  );
};

export default OrderLog;

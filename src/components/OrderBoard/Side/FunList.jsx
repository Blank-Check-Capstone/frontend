const FunList = () => {
  return (
    <div className="w-full h-full fixed z-10">
      <div className="w-[15vw] top-[27vw] left-[15vw] absolute z-[2]">
        <div className="w-full h-[6vw] border-b-2 bg-yellow-50 flex items-center justify-between px-[1vw]">
          <div className="flex items-center gap-[0.5vw]">
            <div className="w-[2.5vw] h-[2.5vw] bg-red-200"></div>
            <div>게임</div>
          </div>
          <div className="w-[2.5vw] h-[2.5vw] bg-[#f1f1f1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[2.5vw] h-[2.5vw] fill-[#bbbbbb]"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z" />
            </svg>
          </div>
        </div>
        <div className="w-full h-[6vw] border-b-2 bg-yellow-50">단채채팅</div>
        <div className="w-full h-[6vw] border-b-2 bg-yellow-50">1:1 채팅</div>
        <div className="w-full h-[6vw] border-b-2 bg-yellow-50">신청곡</div>
      </div>
      <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"></div>
    </div>
  );
};

export default FunList;

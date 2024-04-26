import CancelIcon from "../../CancelIcon";

const Call = ({ closeCallModal }) => {
  return (
    <div className="w-full h-full fixed z-10 flex justify-center items-center">
      <div className="w-[90%] h-[90%]  bg-white relative z-[2]">
        <div className="w-full h-[10%] bg-[#222222] flex items-center justify-between px-[2vw]">
          <div className="text-2xl text-white flex items-center">
            <svg
              className="w-[2vw] h-[2.8vw] mx-3"
              width="56"
              height="53"
              viewBox="0 0 56 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.5005 14.8228C42.5005 23.0092 35.8641 29.6455 27.6777 29.6455C19.4913 29.6455 12.855 23.0092 12.855 14.8228C12.855 6.63638 19.4913 0 27.6777 0C35.8641 0 42.5005 6.63638 42.5005 14.8228Z"
                fill="white"
              />
              <path
                d="M55.6182 39.746C49.8465 49.3218 35.2861 52.8635 27.8091 52.9947C20.3321 53.1258 5.37817 50.8959 0 39.746L18.2333 27.5467C22.2997 31.0885 27.8091 30.6949 27.8091 30.6949C27.8091 30.6949 34.1055 30.9573 37.3849 27.8091L55.6182 39.746Z"
                fill="white"
              />
            </svg>
            직원호출
          </div>
          <div
            className="flex items-center cursor-pointer gap-[1vw]"
            onClick={closeCallModal}
          >
            <div>
              <CancelIcon
                width="3vw"
                height="3vw"
                stokeWidth="0.2"
                color="white"
              />
            </div>
            <div className="text-[2vw] text-white leading-[2vw] font-bold">
              닫기
            </div>
          </div>
        </div>

        <div className="w-full h-[90%] flex">
          <div className="bg-[#D9D9D9] w-[70%] flex justify-center items-center">
            <div className="w-full grid grid-cols-3 auto-rows-[10vw] p-5">
              <div className="relative w-full h-full bg-white border-2 border-[#27CACA] flex justify-center items-center text-2xl text-[#27CACA]">
                티슈 주세요
                <div className="flex absolute bottom-0 right-0 m-2">x1</div>
              </div>
              <div className="w-full h-full bg-white border-2 border-[#919191] flex justify-center items-center text-2xl text-[#575757]">
                티슈 주세요
              </div>
            </div>
          </div>

          <div className="bg-white w-[30%] h-full">
            <div className="w-full h-[20%] bg-white border-b-2 border-[#D9D9D9]">
              <div className="w-[90%] h-[30%] bg-white flex justify-between mx-3 my-1 items-center">
                <div className="text-2xl">티슈 주세요</div>
                <div className="w-[20%] h-[80%] bg-[#B5B5B5] flex justify-center items-center border-2 border-[#929292] text-white rounded-full">
                  삭제
                </div>
              </div>
              <div className="flex mx-3 w-[30%] h-[30%] bg-white my-5">
                <div className="w-[35%] h-full text-2xl bg-black flex justify-center items-center text-white">
                  -
                </div>
                <div className="w-[40%] h-full bg-white flex justify-center items-center">
                  1
                </div>
                <div className="w-[35%] h-full bg-black flex justify-center items-center text-white">
                  +
                </div>
              </div>
            </div>

            <div className="w-[30%] h-[10%] bg-white flex absolute bottom-0">
              <div className="h-full w-[40%] bg-[#A9A9A9] flex justify-center items-center text-white text-2xl">
                전체삭제
              </div>
              <div className="h-full w-[60%] bg-[#6DDDDD] flex justify-center items-center text-white text-2xl">
                요청하기
              </div>
            </div>
          </div>

          {/* <div className="bg-white w-[30%] h-full flex justify-center items-center">
            <div className="text-center text-2xl font-bold">
              <span className="text-black">왼쪽에서</span>
              <br />
              <span className="text-[#FF8F0C]">요청하실 항목을</span>
              <br />
              <span className="text-[#FF8F0C]">선택</span>
              <span className="text-black">해주세요.</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"></div>
    </div>
  );
};

export default Call;

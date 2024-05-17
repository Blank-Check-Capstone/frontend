const SelectedSide = ({ selectedCalls, getCallById }) => {
  return (
    <div className="bg-white w-[30%] h-full">
      {selectedCalls.map((selectedCall) => {
        const findCall = getCallById(selectedCall.id);

        return (
          <div className="w-full h-[20%] bg-white border-b-2 border-[#D9D9D9]">
            <div className="w-[90%] h-[30%] bg-white flex justify-between mx-3 my-1 items-center">
              <div className="text-2xl">{findCall.name}</div>
              <div className="w-[20%] h-[80%] bg-[#B5B5B5] flex justify-center items-center border-2 border-[#929292] text-white rounded-full">
                삭제
              </div>
            </div>
            <div className="flex mx-3 w-[30%] h-[30%] bg-white my-5">
              <div className="w-[35%] h-full text-2xl bg-black flex justify-center items-center text-white">
                -
              </div>
              <div className="w-[40%] h-full bg-white flex justify-center items-center">
                {selectedCall.amount}
              </div>
              <div className="w-[35%] h-full bg-black flex justify-center items-center text-white">
                +
              </div>
            </div>
          </div>
        );
      })}

      <div className="w-[30%] h-[10%] bg-white flex absolute bottom-0">
        <div className="h-full w-[40%] bg-[#A9A9A9] flex justify-center items-center text-white text-2xl">
          전체삭제
        </div>
        <div className="h-full w-[60%] bg-[#6DDDDD] flex justify-center items-center text-white text-2xl">
          요청하기
        </div>
      </div>
    </div>
  );
};

export default SelectedSide;

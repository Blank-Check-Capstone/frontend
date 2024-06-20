import { t } from "i18next";

const SelectedSide = ({
  selectedCalls,
  getCallById,
  addSelectedCall,
  removeSelectedCall,
  deleteSelectedCall,
  openCallConfirmModal,
  clearSelectedCall,
}) => {
  return (
    <div className="bg-white w-[30%] h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        {selectedCalls.map((selectedCall) => {
          const findCall = getCallById(selectedCall.id);

          return (
            <div className="w-full bg-white border-b-2 border-[#D9D9D9] flex flex-col gap-[2vw] p-[1vw]">
              <div className="w-full bg-white flex justify-between items-center">
                <div className="text-[2vw]">{findCall.name}</div>
                <div
                  className="w-[4vw] h-[2vw] bg-[#B5B5B5] flex justify-center items-center border-2 border-[#929292] text-[1vw] text-white rounded-full cursor-pointer"
                  onClick={() => deleteSelectedCall(selectedCall.id)}
                >
                  {t("삭제")}
                </div>
              </div>
              <div className="flex h-[3vw] gap-[1vw] bg-white">
                <div
                  className="w-[3vw] h-full text-2xl bg-black flex justify-center items-center text-white cursor-pointer"
                  onClick={() => removeSelectedCall(selectedCall.id)}
                >
                  -
                </div>
                <div className="bg-white flex justify-center items-center text-[1.5vw]">
                  {selectedCall.amount}
                </div>
                <div
                  className="w-[3vw] bg-black flex justify-center items-center text-white cursor-pointer"
                  onClick={() => addSelectedCall(selectedCall.id)}
                >
                  +
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-[5vw] bg-white flex">
        <div
          className="h-full w-[40%] bg-[#A9A9A9] flex justify-center items-center text-white text-[2vw] cursor-pointer"
          onClick={clearSelectedCall}
        >
          {t("전체삭제")}
        </div>
        <div
          className="h-full w-[60%] bg-[#6DDDDD] flex justify-center items-center text-white text-[2vw] cursor-pointer"
          onClick={openCallConfirmModal}
        >
          {t("요청하기")}
        </div>
      </div>
    </div>
  );
};

export default SelectedSide;

import { useState } from "react";
import CancelIcon from "../../CancelIcon";
import SelectedSide from "./Call/SelectedSide";
import UnSelectedSide from "./Call/UnSelectedSide";

const callMenus = [
  {
    id: 1,
    name: "티슈 주세요",
  },
  {
    id: 2,
    name: "테이블정리해주세요 제발",
  },
  {
    id: 3,
    name: "물 주세요",
  },
  {
    id: 4,
    name: "직원 호출",
  },
  {
    id: 5,
    name: "티슈",
  },
];

const Call = ({ closeCallModal }) => {
  const [selectedCalls, setSelectedCalls] = useState([
    {
      id: 1,
      amount: 9,
    },
  ]);

  const getCallById = (id) => {
    return callMenus.find((callMenu) => callMenu.id == id);
  };

  const addSelectedCall = (id) => {
    const hasCall = selectedCalls.findIndex((_menu) => _menu.id == id);

    if (hasCall < 0) {
      setSelectedCalls([...selectedCalls, { id, amount: 1 }]);

      return;
    }

    if (selectedCalls[hasCall].amount >= 9) return;

    const _selectedCalls = [...selectedCalls];

    _selectedCalls[hasCall].amount++;

    setSelectedCalls(_selectedCalls);
  };

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
              {callMenus.map((callMenu) => {
                const findCall = selectedCalls.find(
                  (_call) => _call.id == callMenu.id
                );

                if (findCall) {
                  return (
                    <div
                      className="relative w-full h-full bg-white border-2 border-[#27CACA] flex justify-center items-center text-2xl text-[#27CACA]"
                      onClick={() => addSelectedCall(callMenu.id)}
                    >
                      {callMenu.name}
                      <div className="flex absolute bottom-0 right-0 m-2">
                        x{findCall.amount}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    className="w-full h-full bg-white border-2 border-[#919191] flex justify-center items-center text-2xl text-[#575757]"
                    onClick={() => addSelectedCall(callMenu.id)}
                  >
                    {callMenu.name}
                  </div>
                );
              })}
            </div>
          </div>

          {selectedCalls.length > 0 ? (
            <SelectedSide
              selectedCalls={selectedCalls}
              getCallById={getCallById}
            />
          ) : (
            <UnSelectedSide />
          )}
        </div>
      </div>
      <div
        className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"
        onClick={closeCallModal}
      ></div>
    </div>
  );
};

export default Call;

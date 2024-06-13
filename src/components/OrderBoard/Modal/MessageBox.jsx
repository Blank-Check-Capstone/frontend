import CancelIcon from "../../CancelIcon";
import NotCircleCheckIcon from "../../../assets/images/NotCircleCheckIcon.svg";

const MessageBox = ({ title, content, closeModal }) => {
  return (
    <div className="w-full h-full fixed flex justify-center items-center z-[99]">
      <div className="w-[45vw] h-[25vw] flex flex-col rounded-lg bg-white relative z-[2] justify-center items-center">
        <div className="h-[15vw] flex justify-center items-center flex-col">
          <div className="font-bold text-[2vw]">{title}</div>
          <div className="text-gray-500 font-light text-[1.5vw]">{content}</div>
        </div>
        <div className="flex gap-[1vw] h-[5vw] w-[40vw] text-[2vw] font-bold">
          <div
            className="bg-[#46B0AE] text-white w-[40vw] h-full hover:cursor-pointer flex justify-center items-center rounded-lg"
            onClick={closeModal}
          >
            <div className="flex justify-center items-center gap-3 mr-[1vw]">
              <div className="w-[2vw] h-[2vw] ">
                <img src={NotCircleCheckIcon} height="33vw" width="33vw" />
              </div>
              확인
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default MessageBox;

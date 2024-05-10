import { Link } from "react-router-dom";
import gifts_image from "../../assets/images/gifts_image.png";

const Footer = ({ openShoppingModal, choiceMenus }) => {
  return (
    <div className="fixed w-[85vw] bottom-0 left-[15vw] flex h-[8vw] border-t-2 border-t-[#F1F1F1] bg-white items-center justify-between px-[1vw]">
      <div className="w-[15vw] h-[75%] border-[0.2vw] border-[#DBDBDB] bg-white rounded-lg ">
        <Link
          to="/gifticon"
          className="w-full h-full flex items-center justify-center gap-[1vw]"
        >
          <img
            src={gifts_image}
            alt="선물하기 사진"
            className="w-[3vw] h-[3vw]"
          />
          <div className="text-[#b0b0b0] text-[2.3vw]">기프티콘</div>
        </Link>
      </div>

      <div className="flex h-full items-center gap-2">
        <Link to="/log" className="h-full flex items-center">
          <div className="w-[15vw] h-[75%] border-[0.2vw] border-[#DBDBDB] bg-white rounded-lg flex items-center justify-center gap-[1vw]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 34"
              fill="none"
              className="w-[2vw] h-[2vw]"
            >
              <rect y="6.10352e-05" width="34" height="6" fill="#D9D9D9" />
              <rect y="14.0001" width="34" height="6" fill="#D9D9D9" />
              <rect y="28.0001" width="34" height="6" fill="#D9D9D9" />
            </svg>
            <div className="text-[#b0b0b0] text-[2.3vw]">주문내역</div>
          </div>
        </Link>

        <div
          className="w-[15vw] h-[75%] bg-[#27CACA] rounded-lg flex items-center justify-center gap-[1vw] hover: cursor-pointer"
          onClick={openShoppingModal}
        >
          <div className="text-white text-[2.3vw] font-semibold">주문하기</div>
          <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-full flex items-center justify-center text-[#27CACA] text-[1.8vw]">
            {choiceMenus.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

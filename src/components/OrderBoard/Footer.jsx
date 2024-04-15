import gifts_image from "../../assets/images/gifts_image.png";

const Footer = () => {
  return (
    <div className="fixed w-[85vw] bottom-0 left-[15vw] flex h-[8vw] max-h-[6vw] border-b-4 border-[#F1F1F1] bg-white items-center px-[1%] gap-3">
      <div className="w-[15%] h-[75%] border-2 border-[#DBDBDB]  bg-white rounded-[10px] flex items-center justify-center gap-2 ">
        <img
          src={gifts_image}
          alt="선물하기 사진"
          className="w-[2vw] h-[2vw]"
        />
        <div className="text-[#DFDFDF] text-[1.5vw] font-bold">기프티콘</div>
      </div>
      <div className="w-[15%] h-[75%] border-2 border-[#DBDBDB]  bg-white rounded-[10px] flex items-center justify-center gap-4 ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 34"
          fill="none"
          className="w-5 h-5"
        >
          <rect y="6.10352e-05" width="34" height="6" fill="#D9D9D9" />
          <rect y="14.0001" width="34" height="6" fill="#D9D9D9" />
          <rect y="28.0001" width="34" height="6" fill="#D9D9D9" />
        </svg>
        <div className="text-[#DFDFDF] text-[1.5vw] font-bold">주문내역</div>
      </div>
      <div className="w-[20%] h-[75%] bg-[#27CACA] rounded-[10px] flex items-center justify-center gap-5 ">
        <div className="text-white text-[1.5vw] font-bold">주문하기</div>
        <div className="w-[2.5vw] h-[2.5vw] bg-white rounded-full flex items-center justify-center text-[#27CACA]">
          0
        </div>
      </div>
    </div>
  );
};

export default Footer;

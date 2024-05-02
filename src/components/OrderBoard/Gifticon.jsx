import Gifticonimg from "../../assets/images/Gifticon.png";
const Gifticon = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full h-[10%] bg-[#ffd745] ">
        <div className="h-full w-[95%] ml-[5%] text-white text-[2vw] flex items-center justify-center">
          상품 활용권 사용
        </div>
        <div className="h-full w-[5%] flex items-center justify-center">
          <svg
            className="w-[3vw] h-[3vw] fill-[#F1F1F1] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </div>
      </div>
      <div className="flex w-full h-[90%]">
        <div className="h-full w-[50%] flex flex-col items-center justify-center">
          <div className="h-[20%] w-[75%]">
            <div className="text-[2vw] font-semibold">
              상품 할인권 번호 입력
            </div>
            <div className="h-[50%] w-full border border-[#919191] my-[1vw] flex items-center px-[1vw] text-[#919191] text-[1.5vw]">
              상품 할인권 번호 입력해주세요.
            </div>
          </div>
          <img src={Gifticonimg} alt="Gifticon" className="h-[25vw]" />
          <div className="text-[1.5vw] my-[1vw]">
            상품 할인권 내에 가입되어 있는 번호를 입력해주세요
          </div>
        </div>
        <div className="border h-[85%] mt-[3%]"></div>
        <div className="h-full w-[50%] flex flex-col items-center justify-center">
          <div className="h-[60%] w-[43%] grid grid-cols-3 font-bold gap-5">
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              1
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              2
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              3
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              4
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              5
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              6
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              7
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              8
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              9
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              <svg
                className="h-[1.5vw] fill-[#7B7B7B]"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 0C319.808 0 380.011 23.744 426.667 65.664V21.3333C426.667 9.536 436.224 0 448 0C459.776 0 469.334 9.536 469.334 21.3333V106.667C469.334 130.197 450.198 149.333 426.667 149.333H341.334C329.558 149.333 320 139.797 320 128C320 116.203 329.558 106.667 341.334 106.667H408.107C368.086 65.856 313.771 42.6667 256 42.6667C138.368 42.6667 42.6668 138.368 42.6668 256C42.6668 373.632 138.368 469.333 256 469.333C367.147 469.333 458.496 385.963 468.459 275.413C469.504 263.68 479.68 255.019 491.627 256.085C503.36 257.152 512 267.52 510.955 279.253C498.987 411.947 389.376 512 256 512C114.838 512 0.00014753 397.163 0.00014753 256C0.00014753 114.837 114.838 0 256 0Z" />
              </svg>
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              0
            </div>
            <div className="w-full h-full bg-[#dadada] text-[#7B7B7B] text-[3vw] flex items-center justify-center rounded-full">
              <svg
                className="h-[2vw] fill-[#7B7B7B]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m19 2h-9.044a4.966 4.966 0 0 0 -3.946 1.931l-5.8 7.455a1 1 0 0 0 0 1.228l5.8 7.455a4.966 4.966 0 0 0 3.946 1.931h9.044a5.006 5.006 0 0 0 5-5v-10a5.006 5.006 0 0 0 -5-5zm3 15a3 3 0 0 1 -3 3h-9.044a2.979 2.979 0 0 1 -2.368-1.158l-5.321-6.842 5.321-6.842a2.979 2.979 0 0 1 2.368-1.158h9.044a3 3 0 0 1 3 3zm-4.793-6.793-1.793 1.793 1.793 1.793a1 1 0 1 1 -1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1 -1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414z" />
              </svg>
            </div>
          </div>
          <div className="w-[70%] h-[13%] my-[3vw] bg-black text-white flex items-center justify-center text-[2vw] rounded-lg">
            조회
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifticon;

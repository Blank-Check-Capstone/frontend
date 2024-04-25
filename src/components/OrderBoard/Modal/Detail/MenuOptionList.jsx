import MenuOptionDesc from "./MenuOptionDesc";

const MenuOptionList = () => {
  return (
    <div className="flex-1 flex flex-col gap-[0.5vw]">
      <div className="flex gap-[0.3vw] items-center">
        <MenuOptionDesc content="20개 선택가능" />
        <MenuOptionDesc content="중복선택 가능" />
        <div className="text-[1.3vw] font-medium">추가선택</div>
      </div>
      <div>
        <div className="flex items-center justify-between px-[1.3vw] py-[1.2vw] border-[#e2e2e2] border-[0.1vw] rounded-sm">
          <div className="text-[1.3vw] text-[#5a5959]">곱빼기</div>
          <div className="text-[1.3vw] text-[#5a5959]">+1,000원</div>
        </div>
      </div>
    </div>
  );
};

export default MenuOptionList;

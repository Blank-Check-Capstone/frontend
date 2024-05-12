import CancelIcon from "../../CancelIcon";
import MinusIcon from "../../MinusIcon";
import PlusIcon from "../../PlusIcon";
import CheckIcon from "../../CheckIcon";

const Shopping = ({
  closeShoppingModal,
  choiceMenus,
  getMenuByCategoryIdAndMenuId,
}) => {
  return (
    <div className="w-full h-full fixed z-10">
      <div className="w-[45vw] h-full bg-white absolute top-0 right-0 z-[2]">
        <div className="h-[10%] flex items-center justify-between border-b border-[#E2E2E2] border-solid ">
          <div>
            <div className="flex p-[1.2vw] ml-[0.25vw] text-[1.7vw] text-[#B0B0B0]">
              장바구니(<div>0</div>)
            </div>
          </div>
          <div className="flex items-center gap-[2vw]">
            <div className="w-[15vw] h-[70%] bg-[#D9D9D9] text-[#929292] rounded-3xl font-light leading-[3vw] text-center px-3 hover: cursor-pointer text-[1.35vw]">
              장바구니 비우기
            </div>
            <div
              className="hover: cursor-pointer w-[4vw] h-[4vw] flex mr-[10px]"
              onClick={closeShoppingModal}
            >
              <CancelIcon />
            </div>
          </div>
        </div>

        <div className="w-full h-[55%]">
          {choiceMenus.map((_menu) => {
            console.log(_menu);

            const menu = getMenuByCategoryIdAndMenuId(
              _menu.categoryId,
              _menu.menuId
            );

            return (
              <div className="w-full h-[37%] border-b border-[#E2E2E2] border-solid">
                <div className="p-[1vw] ml-[0.55vw] flex flex-col gap-[1.7vw]">
                  <div className="font-bold text-[1.8vw]">{menu.name}</div>
                  <div className="flex justify-between">
                    <div className="flex gap-6 items-center">
                      <div className="border-[#E2E2E2] rounded-3xl border hover: cursor-pointer">
                        <MinusIcon />
                      </div>
                      <p className="text-[1.8vw] font-medium">1</p>
                      <div className="border-[#E2E2E2] rounded-3xl border hover: cursor-pointer">
                        <PlusIcon />
                      </div>
                    </div>
                    <div className="flex gap-7 items-end">
                      <p className="text-[2vw] text-[#6D6D6D] ">
                        {menu.price.toLocaleString()}원
                      </p>
                      <div className="w-[2.7vw] h-[2.7vw] bg-[#D9D9D9] rounded-3xl hover: cursor-pointer mr-[0.3vw] mb-[0.3vw]">
                        <CancelIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#DEDEDE] w-full h-[7%] flex">
          <div className="flex items-center ml-[2vw] gap-2 ">
            <div className="hover: cursor-pointer">
              <CheckIcon />
            </div>
            <p className="font-bold text-[#5F5F5F] text-[1.25vw]">상품 할인권 사용</p>
          </div>
        </div>

        <div className="w-full h-[14%] flex justify-between px-[1.8vw]">
          <div className="text-[#A8A8A8] text-[1.8vw] flex items-center">총 금액</div>
          <div className="text-3xl mt-[2vw] flex">
            <p className="font-bold items-center text-[3vw]">7,000</p>
            <p className="text-[2vw] leading-10 items-center">원</p>
          </div>
        </div>

        <div className="bg-blue-300 w-full h-[14%] flex text-white">
          <div className="bg-[#505050] w-[25%] h-full flex items-center justify-center text-[2.2vw] hover: cursor-pointer">
            <p>선물</p>
          </div>
          <div className="bg-black w-[25%] h-full flex items-center justify-center text-[2.2vw] hover: cursor-pointer">
            포장
          </div>
          <div className="bg-[#27CACA] w-[50%] h-full flex items-center justify-center text-[2.2vw] hover: cursor-pointer">
            주문하기
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"></div>
    </div>
  );
};

export default Shopping;
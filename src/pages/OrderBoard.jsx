import Main from "../components/OrderBoard/Main";
import Menu from "../components/OrderBoard/Side/Menu";
import KoreanFlag from "../assets/images/KoreanFlag.png";
import MenuOrderIcon from "../assets/images/menuOrder.svg";
import MenuDetail from "../components/OrderBoard/Modal/MenuDetail";

const menuList = [
  { id: 1, title: "메뉴주문", icon: MenuOrderIcon, selected: true },
  { id: 2, title: "FUN", icon: KoreanFlag, selected: false },
  { id: 3, title: "LANG", icon: KoreanFlag, selected: false },
];

const OrderBoard = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="fixed flex flex-col top-0 w-[15vw] h-full bg-[#222222] z-0">
        <div className="w-[100%] h-[20vw] bg-[#000] flex flex-col gap-[1.2vw] items-center justify-center">
          <div className="w-[9.5vw] h-[9.5vw] max-w-40 max-h-40 rounded-[30%] bg-white"></div>
          <div className="text-white text-[2.5vw] font-semibold">중식당</div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-full flex flex-col overflow-auto">
            {menuList.map((menu) => (
              <Menu
                key={menu.id}
                id={menu.id}
                title={menu.title}
                icon={menu.icon}
                selected={menu.selected}
              />
            ))}
          </div>
          <div className="flex flex-1 w-[15vw] h-[15vw] items-center justify-center relative">
            <div className="bg-[#46B0AE] text-white rounded-[50%] w-[10vw] h-[10vw] flex justify-center items-center absolute bottom-4">
              <div className="text-center text-[1.8vw]">
                직원
                <br />
                호출
              </div>
            </div>
          </div>
        </div>
      </div>
      <Shopping />
      <Main />
    </div>
  );
};

export default OrderBoard;

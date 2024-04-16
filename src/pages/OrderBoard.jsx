import Main from "../components/OrderBoard/Main";
import Menu from "../components/OrderBoard/Side/Menu";
import KoreanFlag from "../assets/images/KoreanFlag.png";
import MenuOrderIcon from "../assets/images/menuOrder.svg"
import Shopping from "../components/OrderBoard/Modal/Shopping";

const menuList = [
  { id: 1, title: '메뉴주문', icon: MenuOrderIcon, selected: true },
  { id: 2, title: 'FUN', icon: KoreanFlag, selected: false },
  { id: 3, title: 'LANG', icon: KoreanFlag, selected: false },
]

const OrderBoard = () => {
  return (
    <div className="flex w-full h-screen">

      <Shopping />

      <div className="fixed flex flex-col top-0 w-v[15vw] h-full bg-[#393939] z-0">
        <div className="w-[100%] h-[20vw] bg-[#000] max-h-60 flex flex-col gap-2 items-center justify-center">
          <div className="w-[10vw] h-[10vw] max-w-40 max-h-40 rounded-[30%] bg-white"></div>
          <div className="text-white text-3xl font-semibold">선불1</div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="h-full flex flex-col overflow-auto">
            {
            /* <Menu title="메뉴주문" icon={<MenuOrderIcon />} selected={true} />
            <Menu title="FUN" icon={<img src={KoreanFlag} alt="태극기" className="h-[5vw] w-[5vw]" />} selected={false} />
            <Menu title="LANG" icon={<img src={KoreanFlag} alt="태극기" className="h-[5vw] w-[5vw]" />} selected={false} /> */
            }
            {menuList.map(menu => (
              <Menu key={menu.id} id={menu.id} title={menu.title} icon={menu.icon} selected={menu.selected} />
            ))}
          </div>
          <div className="flex flex-1 w-[15vw] h-[15vw] items-center justify-center">
            <div className="bg-[#46B0AE] text-white rounded-[50%] w-[12vw] h-[12vw] flex justify-center items-center">
              <div className="text-center text-[1.8vw]">
                직원
                <br />
                호출
              </div>
            </div>
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
};

export default OrderBoard;

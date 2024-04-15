import blackNoodles from "../../../assets/images/blackNooles.jpg";
import Menu from "./Menu";

const Menus = ({ title }) => {
  const menuList = [
    {
      name: "짜장면",
      price: 7000,
      image: blackNoodles,
    },
    {
      name: "짜장면",
      price: 7000,
      image: blackNoodles,
    },
    {
      name: "짜장면",
      price: 7000,
      image: blackNoodles,
    },
  ];

  return (
    <div>
      <div className="w-full h-[10%] bg-[#D9D9D9] flex items-center text-2xl p-5">
        면류
      </div>
      <div className="grid grid-cols-3 px-5 auto-rows-[minmax(23vw,_auto)] justify-center gap-8 mt-[2%] bg-[#f7f7f7]">
        {menuList.map((menu) => (
          <Menu name={menu.name} price={menu.price} image={menu.image} />
        ))}
      </div>
    </div>
  );
};

export default Menus;

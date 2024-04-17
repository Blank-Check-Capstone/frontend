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
      <div className="w-full h-[5vw] bg-[#D9D9D9] flex items-center text-[2vw] pl-[2vw]">
        면류
      </div>
      <div className="grid grid-cols-3 px-[2vw] auto-rows-[minmax(23vw,_auto)] justify-center items-center gap-8 mt-[2%] bg-[#f7f7f7]">
        {menuList.map((menu) => (
          <Menu name={menu.name} price={menu.price} image={menu.image} />
        ))}
      </div>
    </div>
  );
};

export default Menus;

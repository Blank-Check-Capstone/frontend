import MenuInfo from "./Detail/MenuInfo";

const MenuDetail = () => {
  return (
    <div className="w-full h-full fixed flex justify-center items-center z-10">
      <div className="w-[85%] h-[85%] bg-white relative z-[2] p-10 rounded-lg">
        <MenuInfo />
      </div>
      <div className="w-full h-full bg-black opacity-30 absolute top-0 left-0 z-[1]"></div>
    </div>
  );
};

export default MenuDetail;

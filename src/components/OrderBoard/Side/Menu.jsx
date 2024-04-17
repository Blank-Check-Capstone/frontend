const Menu = ({ id, title, icon, selected }) => {
  return (
    <div
      className={`flex h-[7vw] w-[100%] items-center pl-[2vw] border-b-[0.1vw] border-b-[#343434] ${
        selected
          ? "gap-[1.2vw] border-l-[0.5vw] border-l-[#46B0AE] bg-[#3d3d3d]"
          : "gap-[1vw]"
      }`}
    >
      <img
        className={`${id == 1 ? "w-[2vw] h-[2vw]" : "w-[3vw] h-[3vw]"}`}
        src={icon}
        alt={title}
      />
      <div
        className={`text-[2vw] font-medium ${
          selected ? "text-white" : "text-gray-400"
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default Menu;

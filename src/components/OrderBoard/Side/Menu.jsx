const Menu = ({ id, title, icon, selected, onClick }) => {
  return (
    <div
      className={`flex h-[7vw] w-[100%] items-center pl-[2vw] border-b-[0.1vw] border-b-[#343434] cursor-pointer ${
        selected
          ? "gap-[1.2vw] border-l-[0.5vw] border-l-[#46B0AE] bg-[#3d3d3d]"
          : "gap-[1vw]"
      }`}
      onClick={onClick}
    >
      <img
        className={`${id === 1 ? "w-[2vw] h-[2vw]" : "w-[3vw] h-[3vw]"} ${
          selected || id === 3
            ? ""
            : "invert-[78%] sepia-[10%] saturate-[324%] hue-rotate-[179deg] brightness-[83%] contrast-[87%]"
        }`}
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

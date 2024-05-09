const Menu = ({ id, name, price, image, addChoiceMenu }) => {
  return (
    <div
      className="bg-white p-3 border border-gray-300 rounded-l"
      onClick={addChoiceMenu}
    >
      <div className="w-full h-[12vw] overflow-hidden flex justify-center items-center">
        <img src={image} alt={name} />
      </div>
      <div className="pl-2">
        <div className="text-[2.2vw] font-normal">{name}</div>
        <div className="text-[2vw] font-bold tracking-tighter">
          {price.toLocaleString()}원
        </div>
      </div>
      <div className="w-[5vw] h-[3vw] bg-[#000] flex items-center justify-center rounded-lg text-white text-[1.5vw] float-right">
        담기
      </div>
    </div>
  );
};

export default Menu;

const LangElement = ({ name, icon, isSelected, onClick }) => {
  return (
    <div
      className={`px-[1.3vw] py-[1vw] flex items-center gap-[0.5vw]  border-white border-[0.05vw] ${
        isSelected ? "bg-[#46B0AE]" : "bg-black"
      }`}
      onClick={onClick}
    >
      <div className="w-[4vw] h-[4vw] rounded-full">
        <img
          src={icon}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="text-white text-[3vw]">{name}</div>
    </div>
  );
};

export default LangElement;

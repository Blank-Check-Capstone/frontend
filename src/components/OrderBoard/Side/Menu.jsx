const Menu = ({id, title, icon, selected}) => {

    return (
      <div className={`flex h-[7vw] w-[100%] items-center pl-[2vw] ${selected ? "gap-[1.2vw] border-l-[0.5vw] border-[#46B0AE]" : "gap-[1vw]"}` }>
        <img className={`${id == 1 ? "w-[4vw] h-[4vw]" : "w-[5vw] h-[5vw]"}`} src={icon} alt={title} />
        <div className="text-[1.8vw] font-medium text-white">
          {title}
        </div>
      </div>
    );
}

export default Menu;
import { forwardRef } from "react";
import Menu from "./Menu";

const Menus = forwardRef(
  ({ categoryId, categoryTitle, menus, addChoiceMenu }, ref) => {
    return (
      <div
        className="flex flex-col gap-[2vw] py-[2vw]"
        id={categoryId}
        ref={ref}
      >
        <div className="w-full h-[5vw] bg-[#D9D9D9] flex items-center text-[2vw] pl-[2vw]">
          {categoryTitle}
        </div>
        <div className="grid grid-cols-3 px-[2vw] auto-rows-[minmax(23vw,_auto)] justify-center items-center gap-8">
          {menus.map((menu) => (
            <Menu
              key={menu.id}
              addChoiceMenu={() => {
                addChoiceMenu(categoryId, menu.id);
              }}
              name={menu.name}
              price={menu.price}
              image={menu.image}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default Menus;

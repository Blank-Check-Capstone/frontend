import { forwardRef, useRef, useState } from "react";
import Menus from "./Center/Menus";

const Center = forwardRef(({ categoryList, changeSelectedCategory }, ref) => {
  const menusRef = useRef(null);

  const [nowViewMenu, setNowViewMenu] = useState(1);

  const onMenuScroll = (e) => {
    if (
      ref.current[ref.current.length - 1].getBoundingClientRect().top -
        ref.current[ref.current.length - 1].offsetHeight -
        100 <
      0
    ) {
      changeSelectedCategory(
        ref.current[ref.current.length - 1].getAttribute("id")
      );

      return;
    }

    ref.current.forEach((rr) => {
      if (
        rr.getBoundingClientRect().top - 100 <= 0 &&
        rr.getBoundingClientRect().top - 100 >= -rr.offsetHeight
      ) {
        changeSelectedCategory(rr.getAttribute("id"));
      }
    });
  };

  return (
    <div
      className="w-full h-[calc(100vh-16vw)] my-[8vw] flex flex-col gap-[2vw] bg-[#ececec] overflow-auto"
      onScroll={onMenuScroll}
      ref={menusRef}
    >
      {categoryList.map((category) => (
        <Menus
          key={category.id}
          id={category.id}
          categoryTitle={category.title}
          menus={category.menus}
          ref={(e) => {
            ref.current[category.id] = e;
          }}
        />
      ))}
    </div>
  );
});

export default Center;

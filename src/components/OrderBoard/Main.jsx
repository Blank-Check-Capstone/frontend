import { forwardRef } from "react";
import Center from "./Center";
import Footer from "./Footer";
import Header from "./Header";

const Main = forwardRef(
  (
    {
      categoryList,
      selectedCategory,
      scrollSelectCategory,
      changeSelectedCategory,
      openShoppingModal,
    },
    ref
  ) => {
    return (
      <div className="pl-[15vw] w-full h-full overflow-auto">
        <Header
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          scrollSelectCategory={scrollSelectCategory}
        />
        <Center
          categoryList={categoryList}
          changeSelectedCategory={changeSelectedCategory}
          ref={ref}
        />
        <Footer openShoppingModal={openShoppingModal} />
      </div>
    );
  }
);

export default Main;

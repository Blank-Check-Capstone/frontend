import Category from "./Header/Category";

const Header = ({ categoryList, selectedCategory, scrollSelectCategory }) => {
  return (
    <div className="fixed w-[85vw] top-0 left-[15vw] flex h-[8vw] border-b-1 border-[#F1F1F1] bg-white">
      <div className="w-[7%] h-full bg-white items-center justify-center flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[2.5vw] h-[2.5vw] fill-[#F1F1F1]"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path d="M16.041,24,6.534,14.48a3.507,3.507,0,0,1,0-4.948L16.052,0,18.17,2.121,8.652,11.652a.5.5,0,0,0,0,.707l9.506,9.52Z" />
        </svg>
      </div>
      <div className="flex-1 flex flex-nowrap overflow-x-scroll whitespace-nowrap">
        {categoryList.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            selected={category.id == selectedCategory}
            onClick={() => scrollSelectCategory(category.id)}
          />
        ))}
      </div>
      <div className="w-[7%] h-full bg-white items-center justify-center flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[2.5vw] h-[2.5vw] fill-[#F1F1F1]"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;

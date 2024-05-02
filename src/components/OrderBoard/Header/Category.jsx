const Category = ({ title, selected, onClick }) => {
  return (
    <div
      className={`flex text-[2.5vw] font-medium items-center justify-center px-[3vw] cursor-pointer ${
        selected
          ? "text-[#5FCEC7] border-b-[#5FCEC7] border-b-[0.5vw] pt-[0.4vw]"
          : "text-black py-[1vw]"
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Category;

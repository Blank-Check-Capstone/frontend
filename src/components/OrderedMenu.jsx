const OrderedMenu = ({ image, x, y }) => {
  return (
    <div
      className={`w-[20vw] h-[15vw] fixed z-50 bg-white p-[1vw] animate-[selected_0.5s_ease-in-out_forwards]`}
      style={{ bottom: `${y}px`, right: `${x}px` }}
    >
      <img src={image} alt={image} className="w-full h-full" />
    </div>
  );
};

export default OrderedMenu;

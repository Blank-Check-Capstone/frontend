import Center from "./Center";
import Footer from "./Footer";
import Header from "./Header";

const Main = ({ openShoppingModal }) => {
  return (
    <div className="pl-[15vw] w-full h-full overflow-auto">
      <Header />
      <Center />
      <Footer openShoppingModal={openShoppingModal} />
    </div>
  );
};

export default Main;

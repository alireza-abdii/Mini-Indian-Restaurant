import FoodItem from "../components/FoodItem";

function Menu() {
  return (
    <div className="w-full h-[55rem] flex justify-center items-start mt-0 flex-wrap">
      <div className="w-[70%] h-[70%] flex flex-col justify-between items-center">
        <h1 className="w-full h-[5rem] flex justify-center items-center text-black text-[4rem] font-bold mt-8 mb-14">
          Food Menu
        </h1>
        <FoodItem />
      </div>
    </div>
  );
}

export default Menu;

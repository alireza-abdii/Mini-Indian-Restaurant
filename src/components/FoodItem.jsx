import { foodData } from "../datas/foodData";

function FoodItem() {
  return (
    <div className="w-full h-[30rem] grid justify-items-center items-center grid-cols-1 gap-x-1 gap-y-14 cursor-pointer md:grid-cols-3">
      {foodData.map((food) => (
        <div
          key={food.id}
          className="w-56 h-72 bg-white shadow-2xl flex flex-col justify-center items-center space-y-5 rounded-2xl transition-all ease-in-out duration-500 hover:bg-slate-300"
        >
          <img src={food.imageURL} className="w-full h-56 rounded-t-2xl" />

          <div className="w-full h-[40%] pl-5 space-y-1">
            <h1 className="font-bold text-xl">{food.name}</h1>
            <p>${food.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodItem;

import { Link } from "react-router-dom";
import contentImg from "../assets/food-table.jpg";

function Home() {
  return (
    <div className="w-full h-[35rem] flex justify-between items-center">
      <div className="bg-slate-200 w-[40%] h-full flex flex-col justify-center items-start pl-16 space-y-10 md:w-full">
        <h1 className="text-[4rem] font-semibold">Food Corner</h1>
        <p className="text-[2rem]">INDIAN FOOD AT A CLICK</p>
        <Link
          to="/menu"
          className="bg-slate-900 text-white px-6 py-3 rounded-md transition-all ease-in-out duration-300 hover:bg-slate-600"
        >
          ORDER NOW
        </Link>
      </div>

      <img
        src={contentImg}
        className="hidden bg-cover w-[60%] h-full md:block"
      />
    </div>
  );
}

export default Home;

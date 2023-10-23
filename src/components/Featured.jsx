import { products } from "../data";
import { Link } from "react-router-dom";
function Featured() {
  return (
    <>
      <h2 className="text-center text-4xl my-4 text-green-500 ">Featured</h2>
      <p className="text-center text-2xl">
        Wallah here is where you can get some of the finger delicacy meals
        taraah!We are a stomach friendly company
      </p>
      <div className="grid grid-cols-4 grid-rows-1 gap-4">
        {products.map((item) => {
          if (item.featured) {
            return (
              <img
                src={`src/assets/images/${item.img}`}
                alt=""
                className="h-[100%] w-[100%] border-2"
              />
            );
          }
        })}
      </div>
      <Link to="/shop">
      <h2 className=" text-center underline-offset-8 underline text-3xl my-4">View all</h2>
      </Link>
    </>
  );
}
export default Featured;

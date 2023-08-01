import { products } from "../data";
function Featured() {
  return (
    <>
      <h2 className="text-center text-4xl ">Featured</h2>
      <p className="text-center">
        Wallah here is where you can get some of the finger delicacy meals
        taraah!We are a stomach friendly company
      </p>
      <div className="grid grid-cols-4 grid-rows-1">
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
      <h2 className=" text-center underline-offset-8 underline">View all</h2>
    </>
  );
}
export default Featured;

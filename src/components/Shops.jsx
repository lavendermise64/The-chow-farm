import { products } from "../data";

const Shops = ({ icon, category }) => {
  console.log(products);
  return (
    <div className="grid grid-cols-4 grid-rows-4">
      {products.map((item) => {
        return (
          <div className="h-50 w-50 container mx-auto border-2 items-center">
            <div className="object-cover">
              <img
                src={`src/assets/images/${item.img}`}
                alt="product image"
                className="h-50 w-50 "
              />
            </div>

            <h4 className="text-center text-2xl ">{item.name}</h4>
            <p className="text-center text-2xl text-green-400 ">
              {" "}
              Ksh.{item.price}
            </p>
            <p className="text-center text-2xl  "> {item.quantity}</p>
            <div className="flex justify-center">
            <button
              onClick={(e) => addToCart(e, item)}
              className=" border-gray p-5 bg-green-500 rounded-full w-52 text-white"
            >
              Add to cart
            </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shops;

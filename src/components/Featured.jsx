import { products } from "../data";
import { Link } from "react-router-dom";
function Featured() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl my-4 text-green-500 ">Featured</h2>
      <p className="text-black   justify-center text-1.9xl p-1 my-4">
        Here are some of our latest products.Which are available in the market.
        We assure our consumers and suppliers of transparent business with no
        fraud involed by strictly following up on all transactions and
        deliveries.Comments and feedbacks are welcomed in our social media
        platforms and suggestions are also highly appreciated and will be kept
        into considerations
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 p-6">
        {products.map((item) => {
          if (item.featured) {
            return (
              <img
                src={`src/assets/images/${item.img}`}
                alt=""
                className="h-[80%] w-[100%] border-2"
              />
            );
          }
        })}
      </div>
      <Link to="/shop">
        <h2 className=" text-center underline-offset-8 underline text-2xl my-4">
          View all
        </h2>
      </Link>
    </div>
  );
}
export default Featured;

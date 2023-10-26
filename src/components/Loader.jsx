import loader from "../assets/images/loader.gif";
function Loader() {
  return (
    <div>
      <div className="w-[100%] h-[100vh] fixed bg-white bg-opacity-50 top-0 left-0 flex justify-center items-center  ">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
}
export default Loader;

function Shops({ icon, category }) {
  return (
    <div className="h-50 w-50 container mx-auto border-4 items-center">
      <div className="object-cover">
        <img src={icon} alt="" className="h-50 w-50" />
      </div>

      <h4 className="text-center ">{category}</h4>
    </div>
  );
}
export default Shops;

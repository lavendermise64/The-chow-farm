function Sales({ sales, salesText, salesColor, clickEvent }) {
  return (
    <div
      className="text-center border-2 w-[20%] h-[15vh] cursor-pointer"
      onClick={clickEvent}
    >
      <h2 className={`${salesColor} text-2xl font-bold text-white`}>{sales}</h2>
      <p className="text-white">{salesText}</p>
    </div>
  );
}
export default Sales;

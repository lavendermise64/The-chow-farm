function Sales({ stat, statText, statColor, clickEvent }) {
  return (
    <div
      className="text-center border-2 w-[20%] h-[15vh] cursor-pointer p-5"
      onClick={clickEvent}
    >
      <h2 className={`${statColor} text-2xl font-bold `}>{stat}</h2>
      <p className="text-center">{statText}</p>
    </div>
  );
}
export default Sales;

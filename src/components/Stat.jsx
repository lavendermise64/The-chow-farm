function Stat({ stat, statText, statColor, clickEvent }) {
  return (
    <div
      className="text-center border-2 w-[20%] h-[15vh] cursor-pointer"
      onClick={clickEvent}
    >
      <h2 className={`${statColor} text-7xl font-bold`}>{stat}</h2>
      <p>{statText}</p>
    </div>
  );
}
export default Stat;

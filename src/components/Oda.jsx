function Oda({ orders, ordersText,ordersColor, clickEvent }) {
    return (
      <div
        className="text-center border-2 w-[20%] h-[15vh]  cursor-pointer"
        onClick={clickEvent}
      >
        <h2 className={`${ordersColor} text-7xl font-bold `}>{orders}</h2>
        <p className="">{ordersText}</p>
      </div>
    );
  }
  export default Oda;
  
const Table = ({ tableNo, orderNo, payType, menu }) => {
  return (
    <div className="flex items-center text-3xl px-3 py-4 gap-2 border border-white">
      <div className="text-4xl px-9 py-2 bg-white text-black">{tableNo}</div>
      <div>no. {orderNo}</div>
    </div>
  );
};

export default Table;

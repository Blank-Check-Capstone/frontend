import Table from "./Table";

const Main = () => {
  const mok = [
    { name: "삼겹살", count: 2 },
    { name: "사이다", count: 1 },
  ];

  return (
    <main className="w-full min-h-screen bg-black text-white px-8 py-5 grid grid-cols-2 auto-rows-[minmax(15rem,_auto)] gap-5">
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
      <Table tableNo={1} orderNo={5} payType={1} menu={mok} />
    </main>
  );
};

export default Main;

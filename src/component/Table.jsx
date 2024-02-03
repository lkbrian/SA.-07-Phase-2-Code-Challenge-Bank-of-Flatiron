
function Table({apiData}) {

  return (
    <>
    <h1 className="table-header">Transaction Information</h1>
    <div className="parent">
      {apiData.map((data) => {
        return (
          <div className="table" key={data.id}>
            <p>{data.id}</p>
            <p>{data.date}</p>
            <p className="description">{data.description}</p>
            <p className="category">{data.category}</p>
            <p className="money">{data.amount}</p>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Table;


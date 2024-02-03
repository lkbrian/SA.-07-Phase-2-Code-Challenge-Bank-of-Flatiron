
function Table({apiData,onDelete}) {

  return (
    <>
    <h1 className="table-header">Transaction Information</h1>
    <div className="parent">
      {apiData.map((data) => {
        return (
          <div className="table" key={data.id}>
            <p className="id">{data.id}</p>
            <p className="date">{data.date}</p>
            <p className="description">{data.description}</p>
            <p className="category">{data.category}</p>
            <p className="money">{data.amount}</p>
            <button className="button" >Delete</button>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Table;


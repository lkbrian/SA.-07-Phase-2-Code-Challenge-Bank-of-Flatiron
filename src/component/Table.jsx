import { FaCircleXmark } from "react-icons/fa6";
function Table({ apiData, onDelete }) {
  return (
    <>
      <h1 className="table-header">Transaction &nbsp; Statements</h1>
      <table className="parent">
        <thead className="tablehead">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th className="del">Delete</th>
          </tr>
        </thead>
        {apiData.map((data) => {
          return (
            <tbody className="table" key={data.id}>
              <tr key={data.id}>
                <td className="date">{data.date}</td>
                <td className="description">{data.description}</td>
                <td className="category">{data.category}</td>
                <td className="money">{data.amount}</td>
                <td className="button" onClick={() => onDelete(data.id)}>
                  <FaCircleXmark className="delete" />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Table;

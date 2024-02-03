import { useState, useEffect } from "react";

function Table() {
  const [apiData, setData] = useState([]);
  // console.log(apiData)
  const API_URL = "http://localhost:8001/transactions";
  useEffect(() => {
    console.log("useEffect renderingb");
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiData = await response.json();
        //  console.log(data)
        setData(apiData);
      } catch (error) {
        console.error("Failed to fetch", error.message);
      }
    };
    fetchData();
  }, []);

  //console.log(apiData)

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

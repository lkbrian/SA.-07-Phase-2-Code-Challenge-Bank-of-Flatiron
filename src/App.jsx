import { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";
import Table from "./component/Table";
import Form from "./component/Form";
function App() {
  const [apiData, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(filteredData)

  const API_URL = "http://localhost:3001/transactions";
  useEffect(() => {
    console.log("useEffect rendering");
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiData = await response.json();
        setData(apiData);
        setFilteredData(apiData)
      } catch (error) {
        console.error("Failed to fetch", error.message);
      }
    };
    fetchData();
  }, []);

  const addTransaction = (newTransaction) => {
    console.log(newTransaction, "in App");
    const updatedData = [...apiData, newTransaction];
    setData(updatedData);
  };

  const filterTransaction = (transactionCategory) => {
    const updatedData =
      transactionCategory === ""
        ? apiData
        : apiData.filter((transaction) => {          
         return transactionCategory === transaction.category});  
    setFilteredData(updatedData);
    console.log(updatedData)
  };

  
  return (
    <>
      <SearchBar filterSearch={filterTransaction} />
      <Form addTransaction={addTransaction} />
      <Table apiData={filteredData} />
    </>
  );
}

export default App;

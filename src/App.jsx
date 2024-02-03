import { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar"
import Table from "./component/Table"
import Form from "./component/Form"
function App() {
  const [apiData, setData] = useState([]);
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
 const addTransaction = (newTransaction)=>{
console.log(newTransaction,"in App")
const updatedData = [...apiData,newTransaction]
setData(updatedData)
 }

  return (
    <>
    <SearchBar/>
    <Form addTransaction={addTransaction}/>
    <Table apiData={apiData}/>
    
     
    </>
  )
}

export default App

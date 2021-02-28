import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
export default function Gloves() {
 
  const [gloves, setGloves] = useState([]);
  useEffect (() => getGloves(), []);

  async function getGloves  () {
    const url = 'https://bad-api-assignment.reaktor.com/v2/products/gloves'
    try{
      const response = await fetch(url);
      const data = await response.json();
      setGloves(data)
    }
    catch (error) {
    console.log("error");
    };
    }
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Color',
        accessor: 'color'
      },
      {
        Header: 'Price',
        accessor: 'price'
      },
      {
        Header: 'Manufacturer',
        accessor: 'manufacturer'
      }
    ]
    
  return (
   <div>
     <ReactTable data={gloves} columns={columns} defaultPageSize={10}/>
   </div>
  );
}


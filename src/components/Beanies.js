import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
export default function Beanies() {
 
  const [beanies, setBeanies] = useState([]);
  useEffect (() => getBeanies(), []);

  async function getBeanies  () {
    const url = 'https://bad-api-assignment.reaktor.com/v2/products/beanies'
    try{
      const response = await fetch(url);
      const data = await response.json();
      setBeanies(data)
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
     <ReactTable data={beanies} columns={columns} defaultPageSize={10}/>
   </div>
  );
}


import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Availability from './Availability';

export default function FaceMasks() {
 
  const [faceMasks, setFaceMasks] = useState([]);
  useEffect (() => getFaceMasks(), []);

  async function getFaceMasks  () {
    const url = 'https://bad-api-assignment.reaktor.com/v2/products/facemasks'
    try{
      const response = await fetch(url);
      const data = await response.json();
      setFaceMasks(data)
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
      },
      {
        Header: 'Availability',
        accessor: 'id',
        Cell: row => <Availability id={row.original} />
      }

    ]
    
  return (
   <div>
     <ReactTable data={faceMasks} columns={columns} defaultPageSize={10}/>
   </div>
  );
}


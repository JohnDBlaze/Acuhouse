import React, { useEffect, useState } from "react";
import './EmployeeList.css';
import axios from 'axios';
import Filebase64 from 'react-file-base64'
 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.phone}</td>
   <td>{props.record.email}</td>
   <td>{props.record.dob}</td>
   <td>{props.record.gender}</td>
   <td>
     <div id="bt">
     <button id="del" className="btn btn-link"  onClick={() => {
         props.downloadRecord(props.record._id);
       }}
     >
       Download
     </button>
     </div>
   </td>
 </tr>
);
 
export default function Display() {
const [records, setRecords] = useState([]);
const url = "http://localhost:9000/acu";
 
 // This method fetches the records from the database.
 useEffect(() => {
   axios.get(url).then((response) => {
      setRecords(response.data)
   }).catch((err) => {
      console.log(err)
   })
   }, [records])

   const downloadRecord = (id) => {
    axios({
      method: "GET",
      url: `http://localhost:8000/download/${id}`,
      responseType: "blob"
  }).then(response => {
      this.setState({ fileDownloading: true }, () => {

          Filebase64.saveAs(response.data, records);
          console.log(response);
      });
      })
      .then(() => {
      this.setRecords({ fileDownloading: false });
      console.log("Completed");
      });
}
 
 function display() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         downloadRecord={() => downloadRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h1>Employees List</h1>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>PHONE</th>
           <th>EMAIL</th>
           <th>DOB</th>
           <th>Gender</th>
           <th>Download</th>
         </tr>
       </thead>
       <tbody>{display()}</tbody>
     </table>

   </div>
   
 );
}

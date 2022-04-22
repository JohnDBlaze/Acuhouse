import React, { useEffect, useState } from "react";
import './Details.css';
import axios from 'axios';
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.phone}</td>
   <td>{props.record.email}</td>
   <td>{props.record.dob}</td>
   <td>{props.record.gender}</td>
   <td>{props.record.address}</td>
   <td>
     <Link id="lins" className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link></td>
 </tr>
);
 
export default function Details() {
const [records, setRecords] = useState([]);
const url = `http://localhost:9000/acu`;
 
 useEffect(() => {
   axios.get(url).then((response) => {
      setRecords(response.data)
   }).catch((err) => {
      console.log(err)
   })
   }, [records])

 
 function display() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         key={record._id}
       />
     );
   });
 }
 
 return (
   <div>
     <h1>Details</h1>
     <table className="table table-striped" id="tb" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>PHONE</th>
           <th>EMAIL</th>
           <th>DOB</th>
           <th>Gender</th>
           <th>Address</th>
           <th>Update</th>
         </tr>
       </thead>
       <tbody>{display()}</tbody>
     </table>

   </div>
   
 );
}

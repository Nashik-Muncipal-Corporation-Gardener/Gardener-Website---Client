import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import url from '../../Uri';
function Grievancedetails({ id }) {

  console.log("Id", id);

  const [grievanceForm, setGrievanceForm] = useState([]);
  const [isGrievanceFormFetched, setIsGrievanceFormFetched] = useState(false);

  function fetchGrievance() {
    axios.get(url + "/grievance-form/" + id).then(function (response) {
      if (response.status == 200) {
        console.log(response.data)
        setGrievanceForm(response.data)
        setIsGrievanceFormFetched(true)
      } else {
        alert(response.data.message)
      }
    }).catch(function (error) {
      console.log(error)
      alert(error.response.data.message)
    })
  }


  useEffect(() => {
    if (!isGrievanceFormFetched) {
      fetchGrievance()
    }
  })

  return (
    <div>
      <center> <h5>Greivance Details</h5></center>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Complaint ID:{grievanceForm.grievanceId}</td>
            <td>Complaint Date:{grievanceForm.createdAt} </td>
          </tr>
          <tr>
            <td>Department:{grievanceForm.department}</td>
          </tr>
          <tr>
            <td>Complaint Type:{grievanceForm.grievanceType} </td>
            <td>Mode of Complaint:Online</td>
          </tr>
          <tr>
            <td>System Registered Date:{grievanceForm.createdAt}</td>
            <td>Status:{grievanceForm.status}</td>
          </tr>
          <tr>
            <td>Division:{grievanceForm.division}</td>
            <td>Prabhag:{grievanceForm.prabhag}</td>
          </tr>
          <tr>
            <td colSpan={2}>Landmark:{grievanceForm.landmark}</td>
          </tr>
          <tr>
            <td colSpan={2}>Street Address:{grievanceForm.address}</td>
          </tr>
          <tr>
            <td colSpan={2}>Image:View</td>
          </tr>
        </tbody>
      </Table>

      <center><h5>Resolution Details</h5></center>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>#</td>
            <td>Start Day</td>
            <td>End Day</td>
            <td>Status</td>
            <td>Reply by</td>
            <td>Reply</td>
          </tr>
        </tbody>
      </Table>
      <Button>Post your Reply</Button>
    </div>
  )
}

export default Grievancedetails
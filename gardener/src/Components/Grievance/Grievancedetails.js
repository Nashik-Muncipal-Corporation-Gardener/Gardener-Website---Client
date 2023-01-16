import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {Table, Button} from 'react-bootstrap';
function Grievancedetails() {
  return (
    <div>
       <center> <h5>Greivance Details</h5></center>
        <Table striped bordered hover>
      <tbody>
        <tr>
          <td>Complaint ID: </td>
          <td>Complaint Date: </td>
        </tr>
        <tr>
          <td>Department: </td>
          <td>Sub Department: </td>
        </tr>
        <tr>
          <td>Complaint Sub Type: </td>
          <td>Mode of Complaint: </td>
        </tr>
        <tr>
          <td>System Registered Date: </td>
          <td>Status: </td>
        </tr>
        <tr>
          <td>Division: </td>
          <td>Prabhag: </td>
        </tr>
        <tr>
          <td colSpan={2}>Landmark: </td>
        </tr>
        <tr>
          <td colSpan={2}>Street Address: </td>
        </tr>
        <tr>
          <td>Mobile: </td>
          <td>Email: </td>
        </tr>
        <tr>
          <td colSpan={2}>Image: </td>
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
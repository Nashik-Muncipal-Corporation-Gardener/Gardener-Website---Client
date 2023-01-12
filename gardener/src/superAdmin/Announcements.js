import React,{useState} from 'react'
import { Icon } from '@iconify/react';

import {
    MDBInput,
    MDBBtn,
    MDBRow, MDBCol,
    MDBContainer
  } from 'mdb-react-ui-kit';
  import Sidebar from "./home/Sidebar/Sidebar";
  import { Container,Table,Button, Modal,Alert} from 'react-bootstrap';

function Announcements() {

  const [announcements,setAnnouncements]=useState(["ABc", "XYZ"])
  const [new_a,setNew]=useState('')

  function new_announcement(e){
        setNew(e.target.value)
  }

    
  function add_new_announcement(){

    announcements.push(new_a)
    var arr=[]
    arr=announcements
    console.log('arr...'+arr)
    setAnnouncements(arr)
  }

  return (
    <div>
        <Sidebar/>
        <MDBContainer style={{padding:'2%'}}>
            <MDBRow>
                <MDBCol>
                    <label>Add New Announcement</label>
                <MDBInput wrapperClass='mb-4'  onChange={new_announcement} id='form1' type='text'/>
             
                <button onClick={add_new_announcement}>Add</button>
                </MDBCol>
                <MDBCol>
                    <h4>Announcements</h4>
                    <Table striped bordered hover size="sm">
                    <tbody>
                       
                            {
                                announcements.map(a=>{
                                    return(
                                        <tr>
                                            <td style={{width:'100%'}}>{a}</td>
                                            <td><Icon icon="material-symbols:delete" color='Red' /></td>
                                        </tr> 
                                    )
                                })
                            }
                        
                    </tbody>
                    </Table>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    </div>
  )
}

export default Announcements
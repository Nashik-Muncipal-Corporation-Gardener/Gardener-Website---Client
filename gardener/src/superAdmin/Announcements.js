import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

import {
    MDBInput,
    MDBBtn,
    MDBRow, MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';
import Sidebar from "./home/Sidebar/Sidebar";
import { Container, Table, Button, Modal, Alert } from 'react-bootstrap';
import axios from 'axios';
import url from '../Uri';

function Announcements() {

    const [announcements, setAnnouncements] = useState([])
    const [isAnnouncementsFetched, setIsAnnouncementsFetched] = useState(false)

    const [newAnnouncement, setNewAnnouncement] = useState('')

    function handleAnnouncementChange(e) {
        setNewAnnouncement(e.target.value)
    }

    useEffect(()=>{

        if(!isAnnouncementsFetched){
            fetchAnnouncements()
        }
        
    })

    function fetchAnnouncements(){
        axios.get(url + "/announcements")
            .then(function (response) {
                console.log(response.data)
                setAnnouncements([...response.data].reverse())
                
                setIsAnnouncementsFetched(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function add_new_announcement(){
        axios.post(url + "/announcements", {"title": newAnnouncement},{
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
            }
        }).then(function (response) {
            alert("Announcement Added")
            console.log(response.data)
            fetchAnnouncements()
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function delete_announcement(announcement){

        var form_data_body = new FormData();
        form_data_body.append("title", announcement);

        console.log("Token: "+localStorage.getItem("jwtTokenSuperAdmin"))
        axios.delete(url + "/announcements/"+announcement,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
            }
        }).then(function (response) {
            if(response.status==200){
                alert("Announcement Deleted")
                console.log(response.data)
                window.location.reload();
            }else{
                console.log("response",response.data);
            }
            
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <Sidebar />
            <MDBContainer style={{ padding: '2%' }}>
                <MDBRow>
                    <MDBCol>
                        <label>Add New Announcement</label>
                        <MDBInput wrapperClass='mb-4' onChange={handleAnnouncementChange} id='form1' type='text' />

                        <button onClick={add_new_announcement}>Add</button>
                    </MDBCol>
                    <MDBCol>
                        <h4>Announcements</h4>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    announcements.map(a => {
                                        return (
                                            <tr>
                                                <td>{a.title}</td>
                                                <td>{a.createdAt}</td>
                                                <td>{a.updatedAt}</td>
                                                <td><Icon onClick={()=>delete_announcement(a.title)} icon="material-symbols:delete" color='Red' /></td>
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
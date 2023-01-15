import React, { useEffect, useState } from 'react'
import { Container,ListGroup,Card,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from '@iconify/react';
import '../css/permissions.css'
import Navbar from './NavigationBar'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import url from '../Uri';

function Permissions() {

    const navigate = useNavigate()

    const [permission,setPermissions] = useState([]);
    const [isPermissionsFetched,setIsPermissionsFetched] = useState(false);

    useEffect(()=>{
        axios.get(url+"/permission").then((res)=>{
            if(res.status==200){    
                setPermissions(res.data);
                setIsPermissionsFetched(true);
            }else{
                alert("Could not fetch permissions")
            }
        }).catch(err=>{
            console.log(err);
            alert("Error occured while fetching permissions")
        })
    })

    const permissionform=()=>{
        navigate('/permissionform')
    }

  return (
    <div className='permissions'>
        <Navbar/>
    
        <br></br><br></br>
        <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>Permissions</h1>
        <Container>
        {
            permission.map((item)=>{
                return(
                    <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <Icon icon="mdi:pine-tree" style={{color: "#51907b", width:"100", height:"100"}} />
                        <a>{item.title}</a>
                            
                        </ListGroup.Item>
                        <ListGroup.Item style={{padding:'0'}}><Button onClick={permissionform} >Apply Now <Icon icon="ri:external-link-line"  style={{color:'aliceblue'}} /></Button></ListGroup.Item>
                    </ListGroup>
                    </Card>
                );
            
            })
        }
    
        </Container>
    </div>
  )
}

export default Permissions
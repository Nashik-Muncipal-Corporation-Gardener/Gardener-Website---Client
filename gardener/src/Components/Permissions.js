import React, { useEffect, useState } from 'react'
import { Container,ListGroup,Card,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from '@iconify/react';
import '../css/permissions.css'
import Navbar from './NavigationBar'
import { json, useNavigate } from "react-router-dom";
import axios from 'axios';
import url from '../Uri';
import Userpermissions from './Userpermissions';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
function Permissions() {

    const [verticalActive, setVerticalActive] = useState('tab1');

  function handleVerticalClick(value) {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  }

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

    const permissionform=(item)=>{
        navigate('/permissionform/'+item.title)
        localStorage.setItem('permission',JSON.stringify(item))
    }

  return (
    <div className='permissions'>
        <Navbar/>
        <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
              Apply Permission
                
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
               My Permissions
                
              </MDBTabsLink>
            </MDBTabsItem>
           
            
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}>
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
                        <ListGroup.Item style={{padding:'0'}}><Button className='applybtn' onClick={()=>permissionform(item)} >Apply Now <Icon icon="ri:external-link-line"  style={{color:'aliceblue'}} /></Button></ListGroup.Item>
                    </ListGroup>
                    </Card>
                );
            
            })
        }
    
        </Container>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}><Userpermissions/></MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
       
    </div>
  )
}

export default Permissions
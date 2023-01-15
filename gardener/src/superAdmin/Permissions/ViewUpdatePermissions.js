import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect } from "react";
import { Button, Card, Container, ListGroup, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import url from "../../Uri";

function ViewUpdatePermissions(){


    const navigate = useNavigate();

    const[arr,setArr]=React.useState([]);

    const[isPermissionsFetched,setIsPermissionsFetched]=React.useState(false);

    useEffect(()=>{
        if(!isPermissionsFetched){
            axios.get(url+"/permission").then((res)=>{
                setArr(res.data);
                setIsPermissionsFetched(true);
            }).catch(err=>{
                console.log(err);
            })
        }
    })

    function deleteItem(item){
        // if(window.confirm("Delete this item?")){
        //     const newArr=arr.filter((ele)=>{
        //         return ele!==item;
        //     });
        //     setArr(newArr);
            
        // }
        
        axios.delete(url+"/permission/",{
            "title":item.title
        },{
            "headers":{
                "Content-Type":"multipart/form-data",
                "Authorization":"Bearer "+localStorage.getItem("jwtTokenSuperAdmin")
            }
        }).then((res)=>{
            alert("Permission deleted successfully");
            window.location.reload();
        }).catch(err=>{
            console.log(err);
            alert("Error occured while deleting permission")

            navigate("/super-admin")
        
        })

    }

    return(
        <div className='permissions'>
            <Navbar/>
        
            <br></br><br></br>
            <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>Permissions</h1>
            <Container>
            
            {
                arr.map(item=>{
                    return(
                        <Card>
                        <Icon  icon="ic:round-delete" color="#abcdef" onClick={()=>deleteItem(item)}  inline={true}  style={{color: "#51907b", width:"20", height:"20"}} />
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <Icon icon="mdi:pine-tree" style={{color: "#51907b", width:"100", height:"100"}} />
                            <a>{item.title}</a>
                                
                            </ListGroup.Item>
                            <ListGroup.Item style={{padding:'0'}}><Button  >Apply Now <Icon icon="ri:external-link-line"  style={{color:'aliceblue'}} /></Button></ListGroup.Item>
                        </ListGroup>
                        </Card>
                    );
                })
            }
            {/* <ListGroup variant="flush">
                <ListGroup.Item>
                <Icon icon="mdi:pine-tree" style={{color: "#51907b", width:"100", height:"100"}} />
                <a>Tree Cutting</a>
                    
                </ListGroup.Item>
                <ListGroup.Item style={{padding:'0'}}><Button  >Apply Now <Icon icon="ri:external-link-line"  style={{color:'aliceblue'}} /></Button></ListGroup.Item>
            </ListGroup>
            </Card>

            <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                <Icon icon="mdi:pine-tree" style={{color: "#51907b", width:"100", height:"100"}} />
                <a>Trimming of Branches</a>   
                </ListGroup.Item>
                <ListGroup.Item style={{padding:'0'}}><Button  >Apply Now <Icon icon="ri:external-link-line"  style={{color:'aliceblue'}} /></Button></ListGroup.Item>
            </ListGroup> */}
            
            </Container>
        </div>
    );
}

export default ViewUpdatePermissions;
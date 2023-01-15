import { Icon } from "@iconify/react";
import React from "react";
import { Button, Card, Container, ListGroup, Navbar } from "react-bootstrap";

function ViewUpdatePermissions(){

    const[arr,setArr]=React.useState([
        {
            "name":"Tree Cutting",
            "icon":"mdi:pine-tree",
        },
        {
            "name":"Trimming of Branches",
            "icon":"mdi:pine-tree",
        },
        {
            "name":"Tree Planting",
            "icon":"mdi:pine-tree",
        }
    ]);

    function deleteItem(item){
        if(window.confirm("Delete this item?")){
            const newArr=arr.filter((ele)=>{
                return ele!==item;
            });
            setArr(newArr);
        }
        
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
                            <Icon icon={item.icon} style={{color: "#51907b", width:"100", height:"100"}} />
                            <a>{item.name}</a>
                                
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
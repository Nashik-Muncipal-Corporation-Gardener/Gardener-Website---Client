import {React, useState, useEffect} from "react";
import url from "../Uri";
import { Container, Table , Button} from "react-bootstrap";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
function Acheivements() {

    const [acheivements,setAcheivements] = useState([])
    const [isAcheivementFetched,setIsAcheivementFetched] = useState(false)

    useEffect(()=>{

        if(!isAcheivementFetched){
            fetchAcheivements()
        }
        
      })
  
      function fetchAcheivements()
      {
        axios.get(url + "/acheivements")
          .then(function (response) {
  
              setAcheivements([...response.data].reverse())       
              setIsAcheivementFetched(true)
              
          })
          .catch(function (error) {
              console.log(error);
          });
      }
  return (
    <div>
        <NavigationBar/>
  <Container style={{padding:'2%'}}>
    <center><h6>All Acheivements</h6></center>
 <Table striped bordered hover size="sm">
  <thead>
    <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Image</th>
    </tr>
  </thead>
  <tbody>
    {
      acheivements.map(a=>{
        return(
        <tr>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td><img src={a.image.data} style={{height:'100px'}}/></td>
              
            </tr> 
        )
      })
    }
    
  </tbody>
</Table>
</Container>
{/* <div style={{position:'absolute',bottom:'0',width:'100%'}}><Footer/></div> */}

    </div>
  )
}

export default Acheivements
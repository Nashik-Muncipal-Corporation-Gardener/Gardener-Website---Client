import {React, useState, useEffect} from "react";
import { Icon } from '@iconify/react';

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBFile
} from 'mdb-react-ui-kit';
import axios from "axios";
import url from "../Uri";
import { Container, Table , Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import AdminHome from "./home/AdminHome";
function Acheivements() {
    const [verticalActive, setVerticalActive] = useState('tab1');

    const [acheivements,setAcheivements] = useState([])
    const [isAcheivementFetched,setIsAcheivementFetched] = useState(false)

    const [imageFile, setImageFile] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    
    function handleVerticalClick(value) {
      if (value === verticalActive) {
        return;
      }
  
      setVerticalActive(value);
    }

    useEffect(()=>{

      if(!isAcheivementFetched){
          fetchAcheivements()
      }
      
    })

    function fetchAcheivements()
    {
      axios.get(url + "/acheivements")
        .then(function (response) {

            setAcheivements(response.data)       
            setIsAcheivementFetched(true)
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function handleTitle(e){
      setTitle(e.target.value)

    }

    function handleDescription(e){
      setDescription(e.target.value)
    }

    function addAcheivement(){
      var formData = new FormData();
      formData.append("description",description)      
      formData.append("image", document.getElementById("imagefile").files[0]);
      formData.append("title", title);

    axios.post(url + "/acheivements", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + localStorage.getItem("jwtTokenSuperAdmin")
      }
    }).then(function (response) {
      if (response.status == 200) {
        alert("Acheivement Uploaded successfully")
        window.location.reload();
      } else {
        console.log("Something went wrong")
        console.log(response)
      }
    }).catch(function (error) {
      console.log(error)
      console.log("Something went wrong")
    })
    }

    function deleteAcheivement(announcement){
      console.log("Token: "+localStorage.getItem("jwtTokenSuperAdmin"))
      axios.delete(url + "/acheivements",{ "title": announcement},{
          headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
          }
      }).then(function (response) {
          alert("Acheivement Deleted")
          console.log(response.data)
          fetchAcheivements()
      })
      .catch(function (error) {
          console.log(error);
      });
  }
  return (
    <div className='grievance'>
    <AdminHome/>

  {/* <Container> */}
  <MDBRow>
  <MDBCol size='3'>
    <MDBTabs className='flex-column text-center'>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
        View Acheivements
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
        Add Acheivements
          
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>
  </MDBCol>
  <MDBCol size='9'>
    <MDBTabsContent>
      <MDBTabsPane show={verticalActive === 'tab1'}>

      <Container style={{padding:'2%'}}>
    <center><h6>All Acheivements</h6></center>
 <Table striped bordered hover size="sm">
  <thead>
    <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Image</th>
    <th></th>
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
              <td><Icon onClick={()=>deleteAcheivement(a.title)} icon="material-symbols:delete" color='Red' /></td>
              
            </tr> 
        )
      })
    }
    
  </tbody>
</Table>
</Container>
      </MDBTabsPane>
      <MDBTabsPane show={verticalActive === 'tab2'}>

      <div className='signin' style={{padding:'2%'}}>
        <div className='addgarden_container'>
        <h1 style={{fontSize:30}}>Add Acheivement</h1>
        <form >
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Title' onChange={handleTitle} />
          <MDBInput className='mb-4' type='Text' id='form2Example1' placeholder ='Description' onChange={handleDescription} />
          <MDBFile style={{marginBottom:20}} label='Add Image' id='imagefile' accept="image/*"  />
          <Button type='submit' className='mb-4' block onClick={addAcheivement}>
            Submit
          </Button> 
        </form>
        </div>
        </div>
      </MDBTabsPane>
    </MDBTabsContent>
  </MDBCol>
</MDBRow>
  {/* </Container> */}
  {/* <Footer/> */}
</div>
  )
}

export default Acheivements
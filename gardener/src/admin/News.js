import React,{useState,useEffect} from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBRow, MDBCol,
  MDBFile,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import {Button, Table} from 'react-bootstrap';
import AdminHome from './home/AdminHome';
import axios from 'axios';
import url from '../Uri';
import { useNavigate } from "react-router-dom";

function News() {

  const navigate = useNavigate()

  const [title,setTitle]=useState('')
  const [file,setNewsFile]=useState()
  const [fileDescription,setFileDescription]=useState('')
  const [isNewsFetched, setIsNewsFetched] = useState(false)
  const [news,setNews]=useState([])

  useEffect(()=>{

    if(!isNewsFetched){
        fetchNews()
    }
    
  })
  function fetchNews(){
    axios.get(url + "/news")
        .then(function (response) {
            setNews([...response.data].reverse())       
            setIsNewsFetched(true)
        })
        .catch(function (error) {
            console.log(error);
        });
  }


  const handleTitle=(e)=>{
    setTitle(e.target.value)
  }

  const handleFileDescription=(e)=>{
    setFileDescription(e.target.value)
  }

  function addNews(){
    // setNewsFile(document.getElementById('newsFile'))
    var formData = new FormData();
    formData.append("description",fileDescription)      
    formData.append("file", document.getElementById("newsFile").files[0]);
    formData.append("title", title);

    axios.post(url + "/news", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + localStorage.getItem("jwtTokenSuperAdmin")
      }
    }).then(function (response) {
      if (response.status == 200) {
        console.log("News Uploaded successfully")
        // window.location.reload();
      } else {
        console.log("Something went wrong")
        console.log(response)
      }
    }).catch(function (error) {
      console.log(error)
      console.log("Something went wrong")
    })
  }

  function viewPDF(pdf){
    console.log("Viewing pdf")
    navigate('/pdfreader', {state:{pdf}})
  }
    

  return (
    <div className='signin'>
    <AdminHome/>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    <h1 style={{fontSize:30}}>Add News</h1>
    <form>
      <MDBInput onClick={handleTitle} className='mb-4' type='Text' id='form2Example1' placeholder ='Title' />
      <MDBTextArea onClick={handleFileDescription} style={{marginBottom:20}} placeholder='Description' rows={4} />
      <MDBFile style={{marginBottom:20}} label='Add news pdf' id='newsFile' />

      <Button type='submit' className='mb-4' block onClick={addNews}>
        Add News
      </Button>

    </form>
   
    </MDBContainer>
<div style={{paddingLeft:'10%',paddingRight:'10%'}}>
    <h1>Previous News</h1>
<center>
    <Table striped bordered hover>
    <tbody>
    {
      news.map(n=>{
        console.log(n)
        return(
          <tr>
            <td>{n.title}</td>
            <td>{n.description}</td>
            <td><Button onClick={()=>viewPDF(n.document)} style={{width:'25%',height:'30px ',fontSize:'12px'}} variant="primary" size="sm">View</Button></td>
          </tr>
        )
      })
    }
    </tbody>
      </Table>
      </center>
      </div>
    </div>
  )
}

export default News
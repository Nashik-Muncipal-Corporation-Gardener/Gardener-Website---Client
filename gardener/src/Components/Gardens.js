import { React, useEffect, useState } from "react";
import '../css/gardens.css'
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Card, Container, Table, Button, Modal, Row, Col } from "react-bootstrap";
import url from "../Uri";
import TextField from '@material-ui/core/TextField';
import {Pagination} from "rsuite";
import Autocomplete from '@material-ui/lab/Autocomplete';

function Gardens() {

    const navigate = useNavigate();

    const [searchResults, setSearchResults] = useState([]);
    const [isSearchResultsFetched, setIsSearchResultsFetched] = useState(false);
    const [nosPages,setPages] = useState(1);
  
    const [gardens,setGardens] = useState([]);
    const [isGardenFetched,setIsGardenFetched] = useState(false);
  
    const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(() => {
  
      if (!isSearchResultsFetched) {
        getSearchResults()
      }
  
      if(!isGardenFetched){
        upadteTableData(1);
      }
  
    })

    function getSearchResults() {
        axios.get(url + "/gardens/search")
          .then(function (response) {
            console.log(response.data)
            setSearchResults(response.data)
            setIsSearchResultsFetched(true)
            setPages(Math.ceil(response.data.length/25))
            console.log("Nos Of Pages",nosPages)
          }).catch(function (error) {
            console.log(error)
          })
    
      }
    
      function handleSearchQuery(){
        // console.log("pages",pages) 
        searchResults.map((item)=>{
          if(item===searchQuery){
            // console.log("found")
            localStorage.setItem("gardenId",item)
            navigate("/super-admin/garden/"+item)
          }
        })
    
        console.log("not found")
      }
    
      function upadteTableData(page){
        localStorage.setItem("page",page)
    
        // var form_data = new FormData();
    
        // form_data.append("pageNumber",parseInt(""+page))
        // form_data.append("pageSize",parseInt("25"))
    
        axios.get(url+"/gardens/25/"+page).then(function(response){
          if(response.status==200){ 
            console.log(response.data.content)
            setGardens([...response.data.content])
            setIsGardenFetched(true)
          }else{
            console.log(response.data)
          }
    
        }).catch(function(error){
          console.log(error)
        })
    
        console.log("page",page)
      }

    //     const gardens=[1,2,3,4]
    //   return (
    //     <div className='gardens'>
    //         {/* <div className='startdiv' >
    //         <h1>Nashik Muncipal Corporation</h1>
    //         </div>
    //         <br></br><br></br> */}
    //         <h1 style={{ color: '#0F4229',display: 'flex',justifyContent: 'center'}}>Gardens</h1>
    //         <Container >
    //             {
    //                 gardens.map(g=>{
    //                     return(
    //                     <figure class="image-block">

    //                                 {/* <img src="http://www.marathwadafriendcircle.com/img/slide1.jpeg" alt="" /> */}
    //                                 <figcaption>
    //                                     <h4>
    //                                         Nashik East
    //                                     </h4>
    //                                     <p>2Q3J+JXF, Gole Colony, Nashik, Maharashtra 422002.</p>
    //                                     <button>
    //                                         Read More
    //                                     </button>
    //                                 </figcaption>
    //                     </figure>
    //                     )
    //                 })
    //             }


    //         </Container>

    //     </div>
    //   )

    return (
        <>
            {/* <!-- Service Start --> */}
            <NavigationBar/>
            <Container style={{ padding: '2%' }}>

<Row>
  <Col>
    <Autocomplete
      style={{ width: 500 }}
      freeSolo
      autoComplete
      autoHighlight
      options={searchResults}
      renderInput={(params) => (
        <TextField {...params}
          onSelect={(e) => {
            console.log(e.target.value)
            setSearchQuery(e.target.value)
            // navigate('/super-admin/garden/'+e.target.value)
          }}
          variant="outlined"
          label="Search Gardens"
          placeholder="Enter Name of Garden"

        />
      )}
    />
  </Col>
  <Col>
    <Button onClick={handleSearchQuery}>Search</Button>
  </Col>
</Row>

<br></br>


  {/* <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Address</th>
    </tr>
    </thead> */}

    {
      gardens.map((item,index)=>{
        return(
            <>
            <Card>
                <Row>
                    <Col style={{padding:'2%'}} sm={4}>
                    <img style={{height:'100%',width:'100%'}} src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?cs=srgb&dl=pexels-pixabay-158028.jpg&fm=jpg"/>
                    </Col>
                    <Col style={{padding:'2%'}} sm={8}>
                    <Table  bordered  size="sm">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{item.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{item.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Gate No.</td>
                                        <td>{item.gateNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Facilities</td>
                                        <td>{item.facilities}</td>
                                    </tr>
                                    <tr>
                                        <td>Open Area</td>
                                        <td>{item.openArea}</td>
                                    </tr>
                                    <tr>
                                        <td>Other Area</td>
                                        <td>{item.otherArea}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{item.location}</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </Col>
                </Row>
                
            </Card>
            <br></br>

            </>
        )
      })
    }


<br></br>

<Pagination
  prev
  last
  next
  first
  size="md"
  pages={nosPages}
  activePage={1}
  onChangePage={(page) => upadteTableData(page)}
  // onSelect={()=> {console.log("Selected!")}}
/>



  
</Container>
            <Footer/>
        </>
    )
}

export default Gardens
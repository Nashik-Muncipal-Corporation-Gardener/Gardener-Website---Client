
import { React, useEffect, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Container, Table, Button, Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Addgardens from "./Addgardens";
import Sidebar from "./home/Sidebar/Sidebar";
import axios from "axios";
import url from "../Uri";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Pagination} from "rsuite";

function Gardendetails() {
  const [verticalActive, setVerticalActive] = useState('tab1');
  const [lgShow, setLgShow] = useState(false);
  function handleVerticalClick(value) {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  }


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


  return (
    <div className='grievance'>
      <Sidebar />

      {/* <Container> */}
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                View Gardens
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Add Garden

              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}>

              <Container style={{ padding: '2%' }}>

                <center><h6>All Gardens</h6></center>
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

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Type</th>
                      <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      gardens.map((item,index)=>{
                        return(
                          <tr>
                            <td>{index+25*(parseInt(localStorage.getItem("page"))-1)+1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.type}</td>
                            <td>???????</td>
                          </tr>
                        )
                      })
                    }
                    
                    </tbody>
                </Table>
                
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
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}><Addgardens /></MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>


      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Garden Detailed Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">

            <tbody>
              <tr>
                <td>Name:</td>
                <td></td>
              </tr>
              <tr>
                <td>Area:</td>
                <td></td>
              </tr>
              <tr>
                <td>Establishment Year:</td>
                <td></td>
              </tr>
              <tr>
                <td>Description:</td>
                <td></td>
              </tr>
              <tr>
                <td>Facilities:</td>
                <td></td>
              </tr>
              <tr>
                <td>Uniqueness:</td>
                <td></td>
              </tr>
              <tr>
                <td>Opening Time:</td>
                <td></td>
              </tr>
              <tr>
                <td>Closing Time:</td>
                <td></td>
              </tr>
              <tr>
                <td>Location:</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Gardendetails
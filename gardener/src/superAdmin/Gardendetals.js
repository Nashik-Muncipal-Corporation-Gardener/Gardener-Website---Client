
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

function Gardendetals() {
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

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    if (!isSearchResultsFetched) {
      getSearchResults()
    }

  })

  function getSearchResults() {
    axios.get(url + "/gardens/search")
      .then(function (response) {
        console.log(response.data)
        setSearchResults(response.data)
        setIsSearchResultsFetched(true)
      }).catch(function (error) {
        console.log(error)
      })

  }

  function handleSearchQuery(){
    searchResults.map((item)=>{
      if(item===searchQuery){
        // console.log("found")
        localStorage.setItem("gardenId",item)
        navigate("/super-admin/garden/"+item)
      }
    })

    console.log("not found")
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

export default Gardendetals
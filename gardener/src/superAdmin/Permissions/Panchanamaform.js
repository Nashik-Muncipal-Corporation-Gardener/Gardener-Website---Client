import React,{useState,useEffect} from 'react'
import {
    MDBFile,
    MDBInput,
    MDBCheckbox,
    MDBRow, MDBCol
  }
  from 'mdb-react-ui-kit';
  import { Container,ListGroup,Card,Button, Dropdown,DropdownButton} from 'react-bootstrap';
  import { Navbar } from "react-bootstrap";

function Panchanamaform() {

  const [value_type,setValuetype]=useState('Permission Type')
  const [tree_type,setTreetype]=useState('Tree Type')

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  
  const handleClick2 = () => {
    setCounter2(counter2 + 1);
    console.log(counter2);
  };

    const permission_type=['Tree Cutting','Branches Trimming']
    const tree_types=['Private','Municipal Corporation','Government']
    const handleSelect=(e)=>{
        console.log(e);
        setValuetype(e)
      }

      const handleSelectTreeType=(e)=>{
        console.log(e);
        setTreetype(e)
      }
  return (
    <div className='permissionsform'>
      <Navbar/>
        <Container>
          {/* <Button>Click</Button> */}
        <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>Personal Information</ListGroup.Item>
            <ListGroup.Item >
            <MDBRow>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Permission ID' id='form1' type='number'/>
            </MDBCol>
            <MDBCol>
            <DropdownButton
                      alignRight
                      title={value_type}
                      id="dropdown-menu-align-right"
                      onSelect={handleSelect}
                          >
                              {
                                  permission_type.map(g=>{
                                      return(
                                          <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                      )
                                  })
                              }
                      </DropdownButton>
              </MDBCol>
       
              
            </MDBRow>
            <MDBRow>
            <MDBInput wrapperClass='mb-4' placeholder='Applicant Name' id='form1' type='text'/>
            </MDBRow>
            <MDBRow>
          <MDBInput wrapperClass='mb-4' placeholder='Applicant Address' id='form1' type='text'/>
          </MDBRow>
          <MDBRow>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Landmark' id='form1' type='text'/>
            </MDBCol>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Area' id='form1' type='text'/>
        </MDBCol>
          </MDBRow>

                              <MDBRow>
                              <DropdownButton
                      alignRight
                      title={tree_type}
                      id="dropdown-menu-align-right"
                      onSelect={handleSelectTreeType}
                          >
                              {
                                  tree_types.map(t=>{
                                      return(
                                          <Dropdown.Item eventKey={t}>{t}</Dropdown.Item>
                                      )
                                  })
                              }
                      </DropdownButton>
                              </MDBRow>
          </ListGroup.Item>
          </ListGroup>
          </Card>


          <Card>
        <ListGroup variant="flush">
            <ListGroup.Item>Trees Information</ListGroup.Item>
            <ListGroup.Item >
            <MDBRow>
            <MDBInput wrapperClass='mb-4' placeholder='Name of the Tree' id='form1' type='text'/>
            </MDBRow>
            <MDBRow>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Age' id='form1' type='number'/>
            </MDBCol>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Height' id='form1' type='number'/>
            </MDBCol>
            <MDBCol>
            <MDBInput wrapperClass='mb-4' placeholder='Width' id='form1' type='number'/>
            </MDBCol>
            </MDBRow>
           
            <MDBRow>
            <MDBInput wrapperClass='mb-4' placeholder='Reasons of cutting' id='form1' type='text'/>
            </MDBRow>

            {Array.from(Array(counter)).map((c, index) => {
            return (
              <>
              <MDBRow>
              <MDBInput wrapperClass='mb-4' placeholder='Name of the Tree' id='form1' type='text'/>
              </MDBRow>
              <MDBRow>
              <MDBCol>
              <MDBInput wrapperClass='mb-4' placeholder='Age' id='form1' type='number'/>
              </MDBCol>
              <MDBCol>
              <MDBInput wrapperClass='mb-4' placeholder='Height' id='form1' type='number'/>
              </MDBCol>
              <MDBCol>
              <MDBInput wrapperClass='mb-4' placeholder='Width' id='form1' type='number'/>
              </MDBCol>
              </MDBRow>
              <MDBRow>
              <MDBInput wrapperClass='mb-4' placeholder='Reasons of cutting' id='form1' type='text'/>
              </MDBRow>
              </>
            )
          })}
            <MDBRow>
            <button style={{width:'20%'}} onClick={handleClick}>Add</button>
            </MDBRow>
            <br></br>
            
          </ListGroup.Item>
          </ListGroup>
          </Card>

          <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>Visitor's Information</ListGroup.Item>
            <ListGroup.Item >
              <MDBRow>
              <MDBInput wrapperClass='mb-4' placeholder='Visitors Name' id='form1' type='text'/>
              </MDBRow>
              
              {Array.from(Array(counter2)).map((c, index) => {
            return (
              <>
              <MDBRow>
              <MDBInput wrapperClass='mb-4' placeholder='Visitors Name' id='form1' type='text'/>
              </MDBRow>
              </>
            )
          })}

              <MDBRow>
              <button style={{width:'20%'}} onClick={handleClick2}>Add</button>
              </MDBRow>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          <br></br>
          <MDBRow>
            <center><button style={{width:'20%'}} >Submit</button></center>
            </MDBRow>
          </Container>
    </div>
  )
}

export default Panchanamaform
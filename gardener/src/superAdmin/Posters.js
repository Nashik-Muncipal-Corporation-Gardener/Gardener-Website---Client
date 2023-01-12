import React,{useState} from 'react'
import {
    MDBFile,
    MDBBtn,
    MDBRow, MDBCol,
    MDBContainer
  } from 'mdb-react-ui-kit';
  import Sidebar from "./home/Sidebar/Sidebar";

function Posters() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div>
        <Sidebar/>
        <MDBContainer style={{padding:'2%'}}>
            <MDBRow>
                <MDBCol>
                <MDBFile label='Select File ' accept="image/*" onChange={handleChange} id='customFile' />
                <br></br>
                <button >Upload</button>
                </MDBCol>
                <MDBCol>
                    <h4>Preview</h4>
                <img
                src={file}
                class="img-thumbnail"
                height="100%"
                width="100%"
                />
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    </div>
  )
}

export default Posters
import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { MDBSelect } from 'mdb-react-ui-kit';
import {Row,Dropdown,DropdownButton, Col,Container , Button} from 'react-bootstrap'
import '../../css/grievances.css'
function Registergrievance() {

    const [value_type,setValuetype]=useState('Grievance Type')
    const grievance_types=['Abc','Xyz']

    const handleSelect=(e)=>{
        console.log(e);
        setValuetype(e)
      }
  return (
    <div className='registergrievance'>
        <Container>
        <form >
        <table>
            <tr>
                <td colspan="2">
                <DropdownButton
                    alignRight
                    title={value_type}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                        >
                            {
                                grievance_types.map(g=>{
                                    return(
                                        <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                    )
                                })
                            }
                    </DropdownButton>
            </td>
            </tr>
            <tr>
                <td colspan="2"><textarea placeholder='Grievance Description' name="description" ></textarea></td>
            </tr>
            <tr>
                <td><DropdownButton
                    alignRight
                    title='Division'
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                        >
                            {
                                grievance_types.map(g=>{
                                    return(
                                        <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                    )
                                })
                            }
                    </DropdownButton></td>
                <td><DropdownButton
                    alignRight
                    title='Prabhag'
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                        >
                            {
                                grievance_types.map(g=>{
                                    return(
                                        <Dropdown.Item eventKey={g}>{g}</Dropdown.Item>
                                    )
                                })
                            }
                    </DropdownButton></td>
            </tr>
            <tr>
                <td colspan="2"><input placeholder='Street Address' type="text" /></td>
            </tr>
            <tr>
                <td><input placeholder='Lankmark' type="text" /></td>
                <td><input placeholder='Area' type="text" /></td>
            </tr>
            <tr>
                <td><input placeholder='Pincode' type="number" /></td>
                <td><input placeholder='File' type="file" /></td>
            </tr>
        </table>
            
        <Button className='registergrievancebtn'>Submit</Button>
      </form>
      </Container>
    </div>
  )
}

export default Registergrievance
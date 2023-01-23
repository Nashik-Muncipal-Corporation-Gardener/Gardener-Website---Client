import React, { useEffect, useState } from 'react'
import axios from 'axios';

import url from '../../Uri'
import { Table } from 'react-bootstrap'
function Logs() {

    const [logdata,setLogdata] = useState([])
    const [isLogFetched,setIsLogFetched] = useState(false)


    useEffect(() => {
        
        if(!isLogFetched){
            getLogs();
        }
    })

    function getLogs(){
        axios.get(url + "/super-admin/logs",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwtTokenSuperAdmin")
            }
        }).then(function (response) {
            if(response.status==200){
                setLogdata(JSON.stringify(response.data));
                setIsLogFetched(true);
                console.log(logdata)
            }else{
                console.log(response);
            }
        }).catch(function (error) {
            console.log(error);
            alert(error.response.data.message)
        })
    }

   
  return (
    <div>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Citizens</th>
        </tr>
      </thead>
      <tbody>
        {/* {
            logdata.map(l=>{
                console.log(l)
                return(
                    <tr>
                    <td>{l}</td>
                    </tr>
                )
            })
        } */}
        
      </tbody>
    </Table>
    </div>
  )
}

export default Logs
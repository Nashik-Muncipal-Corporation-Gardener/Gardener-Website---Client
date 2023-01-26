import React,{useEffect,useState} from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import axios from 'axios'
import url from '../Uri'
import { Container } from 'react-bootstrap'
function TermsandConditions() {
    const [terms,setTerms] = useState([])
    const [isTermsFetched,setIsTermsFetched] = useState(false)

    useEffect(()=>{

        if(!isTermsFetched){
            fetchTerms()
        }
        
      })
  
      function fetchTerms()
      {
        axios.get(url + "/terms")
          .then(function (response) {
                console.log(response.data)
              setTerms([...response.data].reverse())       
              setIsTermsFetched(true)
              
          })
          .catch(function (error) {
              console.log(error);
          });
      }
  return (
    <div>
<NavigationBar/>
<Container style={{padding:'2%'}}>

{
    terms.map(t=>{
        return(
            <p>{t.termsAndConditions}            </p>
        )
    })
}
</Container>
<div style={{position:'absolute',bottom:'0',width:'100%'}}><Footer/></div>

        
    </div>
  )
}

export default TermsandConditions
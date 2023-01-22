import React, { useState,useEffect } from "react";
import axios from "axios";

function GardenInfo(){

    var url = window.location.href;

    // var str = url.split('/')

    // var gardenId = str[6]
    var gardenId = localStorage.getItem("gardenId")
    console.log(gardenId)

    const[garden,setGarden] = useState();
    const[isGardenFetched,setIsGardenFetched] = useState(false);

    useEffect(()=>{
        if(!isGardenFetched){
            getGarden()
        }
    })


    function getGarden(){
        axios.get(url+"/gardens/name",{
            "name":gardenId
        })
        .then(function(response){
            if(response.status==200){
                alert("Garden fetched")
                console.log(response.data)
                setGarden(response.data)
                setIsGardenFetched(true)
            }else{
                alert("Error in fetching garden")
            }
            
        }).catch(function(error){
            console.log(error)
        })
    }

    return(
        <div>
            <h1>Garden Info:{gardenId}</h1>
            {/* <h2>{garden.gateNo}</h2> */}
        </div>
    )
}

export default GardenInfo;
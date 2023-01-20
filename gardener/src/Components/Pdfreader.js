import React,{useState} from 'react'
// import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import {Container} from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom';
function Pdfreader() {

  const state = useLocation()
  
  console.log(state.state.pdf.data)

  const pdffile=state.state.pdf.data
  console.log(pdffile)
  const src="data:application/pdf;base64,"+pdffile
  return (

			<embed src={src}  style={{width:"100%" ,height:"800px"}}></embed>
			
		
  )
}

export default Pdfreader
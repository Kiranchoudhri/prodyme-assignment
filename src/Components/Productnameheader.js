import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import './Productnameheader.css'

function Productnameheader() {
  return (

        <div className='headerContainer'>
            <div className='categoryContainer'>
                <div className='navigation'>Navigation Category A</div>
                <div className='icon'><FaAngleDown size= "20px" /></div>
            </div>
            <div>Navigation Item A </div>
        </div>
    
  )
}

export default Productnameheader
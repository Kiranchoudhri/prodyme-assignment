import React from 'react'
import './Footer.css'
import {useState} from 'react'

function Footer() {
    
  return (
      <div>
          <div className='footerContainer'>
        <div className='footerData1'>Product Specifications</div>
        <div >Reviews</div>
        <div>FAQs</div>
    </div>
    <div className='lineContainer'>
    <div className='line'></div>
    <div className='activeLine'></div>
    </div>
    
      </div>
    
  )
}

export default Footer
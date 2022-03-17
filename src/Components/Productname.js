import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { BiHeart } from "react-icons/bi";
import './Productname.css'

function Productname() {
  return (
    <div>
        <div className='title'>
            <div className='productName'> Product name ABC</div>
            <div className='wishlistIcon'><BiHeart fontSize =  "40px" color="orangered"/></div>
        </div>
        <div className='productDisc'>Product Category Name (Example Plywood)</div>
        <div className='ratingContainer'>
            <div className='ratingIconContainer'>
                <div><RiStarSFill  fontSize="25px"/></div>
                <div><RiStarSFill  fontSize="25px"/></div>
                <div><RiStarSFill  fontSize="25px"/></div>
                <div><RiStarSFill  fontSize="25px"/></div>
                <div className='lastRatingIcon'><RiStarSFill color='grey' fontSize="25px"/></div> 
                <div className='ratingPoints'>4.4 <span>(328 reviews)</span></div>
            </div>
            
            <div className='build'><a href='#'>Build my Project</a></div>
            <div className='price'>Rs. 2110.00 <span>per sheet</span></div>
        </div>
    </div>
  )
}

export default Productname
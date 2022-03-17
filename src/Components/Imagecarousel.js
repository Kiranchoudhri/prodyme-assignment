import React from 'react'
import './ImageCarousel.css'
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'
import image4 from '../Assets/image4.jpg'
import image5 from '../Assets/image5.jpg'
import { FaAngleDown } from "react-icons/fa";
import {useState} from 'react'

function Imagecarousel() {
  let images = [image1, image2, image3, image4, image5 ]
  let activeStyle = {
     outline: "4px solid white"
  }
  const [picture, setPicture] = useState(0)
  
  
  return (
    <div className='carouselContainer'>
      <div className='imageWrapper'>
      {images.map((items, index) => <div className='imageContainer' ><div >
           <img src={items}  alt = "image" onClick={(e) => setPicture(index)}></img>
       </div>
       </div>)} 
       <div className='imageSliderIcon'><FaAngleDown fontSize="50px"/></div> 
      </div> 

       <div className='fullImage'><img src={images[picture]} alt = "image"/></div>
    </div>
  )
}

export default Imagecarousel
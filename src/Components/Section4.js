import React from 'react'
import './Addsection.css'

function Section4() {
  return (
    <div>
       <div className='sectionWrapper'>
       <div className='available'>Available online <span>189</span></div>
    <div className='qtyContainer'>
        <div>Quantity</div>
        <div className='minus'>-</div>
        <input type="text" value={1}></input>
        <div className='plus'>+</div>
    </div>
    <div className='cartButton'>Add to Cart</div>
    </div> 
    </div>
  )
}

export default Section4
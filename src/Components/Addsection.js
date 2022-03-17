import React from 'react'
import './Addsection.css'

function Addsection() {
  return (
    <div className='sectionWrapper'>
    <div className='available'>Available online <span>189</span></div>
    <div className='qtyContainer'>
        <div className='quantity'> Quantity</div>
        <div className='minus'>-</div>
        <input type="text" value={1}></input>
        <div className='plus'>+</div>
    </div>
    <div className='cartButton'>Add to Cart</div>
    </div>
  )
}

export default Addsection
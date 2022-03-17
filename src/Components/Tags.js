import React from 'react'
import './Tags.css'

function Tags() {
  return (
    <div>
        <div className='pageTitle'>Home / <b>Product Detail Page</b></div>
        <div className='tagsWrapper'>
            <div className='tags'>Tags:</div>
            <div className='tagsContainer'>
                <div className='kitchenTag'>Kitchen</div>
                <div className='shapeTag'>L-Shape</div>
                <div className='sustainableTag'>Sustainable</div>
            </div>
        </div>
    </div>
  )
}

export default Tags
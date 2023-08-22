import React from 'react'
import "./cart.css"


function Cart({image, txt, details1, details2}) {
  return (
    <div className='cart'>
      <img src={image} alt='img1'></img>
      <span>{txt}</span>
      <span>{details1}</span>
      <span>{details2}</span>
      <button className='c-button'> <a href='https://www.linkedin.com/in/kiran-patil-903b41200/'>Learn More</a></button>
    </div>
  )
}


export default Cart;

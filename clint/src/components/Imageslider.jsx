//import React, { useState } from 'react'
import "../styles/Imageslider.scss"

const Imageslider = () => {

   // const [quantity, setQuantity] = useState(1);

  //const handleQuantityChange = (event) => {
    //setQuantity(event.target.value);
  //};
  return (
    <div className='banner'>
    <div className='slider' style={{ '--quantity': 10 }}>
        <div className='item' style={{ '--position': 1 }}><img src="/assets/pexels1.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 2 }}><img src="/assets/pexels2.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 3 }}><img src="/assets/pexels3.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 4 }}><img src="/assets/pexels4.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 5 }}><img src="/assets/pexels5.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 6 }}><img src="/assets/pexels6.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 7 }}><img src="/assets/pexels7.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 8 }}><img src="/assets/pexels8.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 9 }}><img src="/assets/pexels9.jpg" alt="" /></div>
        <div className='item' style={{ '--position': 10 }}><img src="/assets/pexels10.jpg" alt="" /></div>

    </div>
    <div className="content">
        <h1 data-content="OUR SERVICES">
            OUR SERVICES
            </h1>
    
    <div className="author">
        <h2>GALLERY</h2>
        <p><b>From Best Moments</b></p>
        <p>
            A good snapshot keeps a moment from running away.
        </p>

    </div>
    <div className="model"></div>
    </div>

</div>
  )
}

export default Imageslider
import React from 'react'
import homeImg from '../assets/images/home-image.png'


const Home =() => {
  return (
    <section id='Home'>
        <div className='Home-contents'>
            <div className='row align-items-center'>
                <div className='col-lg-5'>
                  <h1>Beauty <span>BOX</span> </h1>
                  <p>Hello, I’am Your Make Up Artist I love people love to fell beautiful, which is the reason I’ve spent last 12 years engulfed in doing Make up.</p>
                  <button type="button" class="btn btn-warning">View More</button>
                </div>
                <div className='col-lg-6'>
                   <img src={homeImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home

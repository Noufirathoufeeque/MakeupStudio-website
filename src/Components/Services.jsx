import React from 'react'
import faceMakeup from '../assets/images/face-makeup.jpg'
import dressingTable from  '../assets/images/dressing-table.jpg'
import haircutMakeup from '../assets/images/haircut-makeup.jpg'
import eyeMakeup from '../assets/images/eye-makeup.jpg'
import eyebrowMakeup from '../assets/images/eyebrow-makeup.jpg'
import facialMakeup from '../assets/images/facial-makeup.jpg'
const Services = () => {
  return (
    <section id='Services'>
        <div className='Services-content'>
           <h3 className='Services-head text-center'>Services</h3>
        <div className='Services-card'>
           <div className="row row-cols-1 row-cols-md-3 g-4">
           <div className="col">
           <div className="card">
             <img src={faceMakeup} className="card-img-top" alt="" />
           <div className="card-body">
             <h5 className="card-title text-center ">Face Makeup</h5>
        </div>
      </div>
  </div>
  <div className="col">
           <div className="card">
             <img src={dressingTable} className="card-img-top" alt="" />
           <div className="card-body">
             <h5 className="card-title text-center">Dressing Table</h5>
        </div>
      </div>
  </div>
  <div className="col">
           <div className="card">
             <img src={haircutMakeup} className="card-img-top" alt="" />
           <div className="card-body">
             <h5 className="card-title text-center">Haircut Makeup</h5>
        </div>
      </div>
  </div>
  <div className="col">
           <div className="card">
             <img src={eyeMakeup} className="card-img-top" alt="" />
           <div className="card-body">
             <h5 className="card-title text-center">Eye Makeup</h5>
        </div>
      </div>
  </div>
  <div className="col">
           <div className="card">
             <img src={eyebrowMakeup} className="card-img-top" alt="" />
           <div className="card-body">
             <h5 className="card-title text-center">Eyebrow Makeup</h5>
        </div>
      </div>
  </div>
  <div className="col">
           <div className="card">
             <img src={facialMakeup} className="card-img-top" alt="" />
           <div className="card-body">
             <h5 className="card-title text-center">Facial Makeup</h5>
        </div>
      </div>
  </div>
</div>
</div>

</div>

</section>
  )
}

export default Services
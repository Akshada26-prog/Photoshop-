import React from 'react'
import "../src/collagegrid.css";


import { NavLink } from 'react-router-dom';

import col1 from "../src/images/col1.webp"
import col2 from "../src/images/col2.png"
import col3 from "../src/images/col3.png"

  

const Collagegrid = () => {
  return (
    <>
     <div className='gridback'>
    <div className='my-5'>
        <h1 className='text-center'>Collage Grids</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-aut0'>
            <div className='row gy-5 gx-5'>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                  <img src={col1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-title">3 Images Grid</h2>
                    <p class="card-text">Select 3 images for Collage grid</p>
                    <NavLink style={{ textAlign: 'center',  width: '180px' ,marginRight: '200px', fontSize: '18px', padding: '8px', backgroundColor: 'green', border: 'none', borderRadius: '5px', marginBottom: '10px',color:'white' }}className="nav-link active" aria-current="page" to="/PhotoAlbum">Select Images</NavLink>


                  </div>
                </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                  <img src={col2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-title">2 Images Grid</h2>
                    <p class="card-text"> Select 2 images for Collage grid</p>
                    <NavLink style={{ textAlign: 'center',  width: '180px' ,marginRight: '200px', fontSize: '18px', padding: '8px', backgroundColor: 'green', border: 'none', borderRadius: '5px', marginBottom: '10px',color:'white' }}className="nav-link active" aria-current="page" to="/PhotoAlbum">Select Images</NavLink>

                  </div>
                </div>
              </div>
              <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                  <img src={col3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-title">4 Images Grid</h2>
                    <p class="card-text"> Select 4 images for Collage grid</p>
                    <NavLink style={{ textAlign: 'center',  width: '180px' ,marginRight: '200px', fontSize: '18px', padding: '8px', backgroundColor: 'green', border: 'none', borderRadius: '5px', marginBottom: '10px',color:'white' }}className="nav-link active" aria-current="page" to="/PhotoAlbum">Select Images</NavLink>


                  </div>
                </div>
              </div>
        </div>
        </div>
        </div>
      </div>
      </div> 




    </>
  )
}
  


export default Collagegrid;

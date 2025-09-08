import React from 'react'
import "../src/Forgot.css";
import ForgotPic from "../src/forgotpas.jfif"
import { Link } from "react-router-dom"


const Forgot = () => {
  return (
    <>
    <div className='back'>
          <div className='header'>
        <div className='sub-header'>
          <div>

             <div className='imager1'>
              <div className='container-imgr'>
                <img src={ForgotPic} alt="forgotpic" className='forgotimg' />
              </div>
            </div>

            <div >
              {/* <img src={email} alt="name"className='name' /> */}
              <input type='text' placeholder='New Password' className='Email' />
            </div><br></br><br></br>
            <div >
              {/* <img src={email} alt="mobileno"className='mobileno' /> */}
              <input type='text' placeholder='Confirm New Password' className='password' />
            </div><br></br><br></br>
            <p><Link to="/Home"><button className='buts'>CONTINUE</button></Link>
            </p>
            
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Forgot;

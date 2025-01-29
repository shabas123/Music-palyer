import React from 'react'
import Categories from '../components/Categories'
import AllVideo from '../components/AllVideo'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
  <>
  <div className="container d-flex justify-content-between mt-5">
    <Add/>
    
    <Link to={'/watchhistory'} style={{textDecoration:"none"}} ><h5><FontAwesomeIcon icon={faClockRotateLeft} className='me-3' /><span className='d-md-inline d-none'>watchhistory</span></h5></Link>
  </div>
  
  
   <div className="container-fluid p-4">
    <div className="row">
      <div className="col-md-9">
       <AllVideo/>   

      </div>
      <div className="col-md-3">
      <Categories/>
      </div>
    </div>
   </div>

  </>
  )
}

export default Home
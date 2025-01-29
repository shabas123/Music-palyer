import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function watchhistory() {
  return (

    <>
    <div className="container">
     <div className="row">
      <div className="col-10">
        <div className='col-2 mb-3'>
          <Link to={'/watchhistory'} style={{textDecoration:"none"}} ><h5>Watch History</h5></Link></div> 
       </div>
      <div className="col-2 mb-4">
      <Link to={'/home'} style={{textDecoration:"none"}} ><h5><FontAwesomeIcon icon={faHouse} className='me-2'/><span className='d-md-inline d-none'>Back Home</span></h5></Link>
      </div>

     </div>
   
 </div>
 <div className="container-fluid  w-100" >
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10 table-responsive">
  <table className='table table-borderd mt-5'></table>
  <thead>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>Url</th>
      <th>Time Stamp</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>ZAYN - PILLOWTALK (Official Video)</td>
     <td><Link to= {''}></Link></td>
      <td>12/12/2012, 12:12:00</td>
      <td><FontAwesomeIcon icon={faTrash} style={{color: "#e01010",}} /></td>
    </tr>
   
  </tbody>
<table/>
    </div>
  </div>
   
    </div>
    
  <h5 className='text-center text-danger'>No watch History</h5>
  
    </>
   
  )
}

export default watchhistory
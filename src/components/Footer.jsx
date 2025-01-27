import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

function Footer() {
  return (
    <>
    <div className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
           <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} beat className='me-3' /> Media Player</h4>  
            <p style={{textAlign:"justify"}} className='mt-3' > Sequi maxime incidunt, ipsum magni perspiciatis libero dolorum veniam ducimus laborum, voluptatum eius quam sint corrupti enim doloremque aliquid. Maxime, nostrum voluptatum. Pariatur est aperiam rerum et nobis.</p>
          </div>
          <div className="col-md-2 col-sm-12 mt-3 ">
            <h4>Links</h4>
            <Link to={'/'}>Landing Page</Link><br />
            <Link to={'/home'}>Home Page</Link><br />
            <Link to={'/watchhistory'}>Watch History Page</Link><br />
          </div>
    
        <div className='col-md-2 col-sm-12 mt-3'>
        <h4>Guides</h4>
            <Link to={'/'}>React</Link><br />
            <Link to={'/home'}>React Bootstrap</Link><br />
            <Link to={'/watchhistory'}>BootsWatch</Link><br />
          </div>
       <div className='col-md-4 px-md-5 mt-3'>
        <h4>Contact us</h4>
        <div className='d-flex'>
          <input type="text" placeholder='Email id' className='form-control me-3' />
           <button className='btn btn-warning'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-center mt-4 '>
        <FontAwesomeIcon size='2xl' icon={faInstagram} className='me-5'/>
        <FontAwesomeIcon size='2xl' icon={faFacebook} className='me-5'/>
        <FontAwesomeIcon size='2xl' icon={faWhatsapp} className='me-5'/>
        <FontAwesomeIcon size='2xl' icon={faLinkedin} className='me-5'/>
         </div>
         </div>
        </div>
        </div>
    
    </div>
    
    </>
  )
}

export default Footer

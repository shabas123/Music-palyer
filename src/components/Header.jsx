import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
   <>
         <Navbar className="bg-body-transperent">
        <Container>
          <Navbar.Brand href="">
           <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} beat className='me-3' /> Media Player</h4>  

            <p>Media Player</p>
          </Navbar.Brand>
        </Container>
      </Navbar>

   
   </>
  )
}

export default Header
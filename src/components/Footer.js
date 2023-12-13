import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';



function Footer() {
  return (
   
    <div id='footer'  className='Footer p-5  w-100 mt-3 '>
     
        <Row lg={4} md={4} sm={6} className='Footer'>
          <Col lg={3} md={6} sm={12} xs={12}>
          <h2 >Project Delve</h2>
          <h6 className='mt-2 '>Completely freeapp to Manage all software Projects </h6>
          <h6>For any query <i style={{color:'blue'}} class="fa-solid fa-envelope"></i> contact@project.com</h6>
          
          
          </Col>

          <Col lg={3} md={6} sm={12} xs={12} className=' Footer ps-3 '>
            <h4 > <b>Links</b></h4>
            <a className='fs-5 'style={{textDecoration:'none',color:'blue'}} href="/">Home</a><br />
            <a className='fs-5'style={{textDecoration:'none',color:'blue'}} href="/login">Login</a><br />
            <a className='fs-5'style={{textDecoration:'none',color:'blue'}} href="/Register">Register</a><br />

            
         </Col>
         <Col className='Footer' lg={3} md={6} sm={12} xs={12}>
         <h4><b>Guides</b>
         </h4>
         <h5>react</h5>
         <h5>react bootstrap</h5>
         <h5>Routing</h5>
         </Col>
         <Col className='Footer' lg={3} md={6} sm={12} xs={12}>
          <h4><b>Contact us</b> </h4>
          <input type="text" placeholder='enter email' /> <Link style={{textDecoration:'none'}}><i class="fa-solid fa-right-long ms-2  fs-4"></i></Link><br />
          <i  class="fa-brands fa-instagram mt-3 fs-4"></i>
          <i class="fa-brands fa-facebook fs-4 p-3"></i>
          <i class="fa-brands fa-github fs-4 "></i>
          <i class="fa-solid fa-envelope fs-4 p-3"></i>
         </Col>
         
         
        </Row>
      
    </div>
    
 
  )
}

export default Footer
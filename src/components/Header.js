import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';



function Header({dashboard}) {
  const navigate=useNavigate()
 
  const logOut=(e)=>{
    e.preventDefault()
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentId")
    localStorage.removeItem("token")
    navigate('/')
  }
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
         <Link style={{textDecoration:'none'}} to={'/'}> <Navbar.Brand  href="#home">
            <img 
              alt=""
              src="https://i.postimg.cc/YCz8DjPL/original-5bd1ff0c85707d2448be7743cf792e96-removebg-preview.png"
              width="40"
              height="50"
              className="d-inline-block align-top mt-2"
            />{' '}
           <b style={{fontSize:'30px'}}> Project Delve </b>
          </Navbar.Brand>
          </Link>
        
        {dashboard &&  
            
              <Link  className='fs-4 text-danger ' style={{textDecoration:'none'}}><b onClick={(e)=>logOut(e)}>Logout</b> <i class="fa-solid fa-right-from-bracket "></i></Link>

        }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
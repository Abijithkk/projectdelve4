import React, { useEffect, useState } from "react";
import { Row,Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ProjectCard from '../components/ProjectCard'
import { homeProjectApi } from "../service/allApi";






function Home() {
  const [isLoggedIn,setLoggedIn]=useState(false)

  const [homeprojects,setHomeProjects]=useState([])

  const getHomeProjects=async()=>{
    const response=await homeProjectApi()
    setHomeProjects(response.data)

  }

  useEffect(()=>{
    getHomeProjects()
if(localStorage.getItem("currentId")){
  setLoggedIn(true)
}
  },[])
  // console.log(homeprojects);
  // console.log(isLoggedIn);
  return (
    <div>
      <Row lg={6} md={3} sm={3}  className=" pt-5 pb-5 w-100">
        <Col lg={6} md={3} sm={3} className=" p-5">
        <h1 id="head"  className="mt-5 ">Project Fair</h1>
        <p  className="mt-3  container">One Stop Destination for all Software Development Projects.Where User can add and manage their projects.As well as access all projects available in our website...What are you waiting for!!!</p>
{isLoggedIn?  <Link to={'/login'}> <Button id="bt"  className="mt-2" variant="outline-danger btn rounded">START<i  class="fa-solid fa-right-long ms-2  fs-4"></i></Button></Link>:
     <Link to={'/dashboard'}> <Button id="bt"  className="mt-2" variant="outline-danger btn rounded">EXPLORE<i  class="fa-solid fa-right-long ms-2  fs-4"></i></Button></Link>
}        </Col>
        <Col lg={6}  md={3} sm={3} >
        <img id="imgh"   src="https://i.postimg.cc/LX78yLtD/5-Tips-for-Project-Managers-To-Track-Project-Progress-Banner-removebg-preview.png" alt="" />
        </Col>
      </Row>
    
      <div className="mt-4 p-5 bg-light">
        <h1 className="text-center"><b>EXPLORE PROJECTS</b></h1>
       <Container>
        <marquee scrollAmount={25}>
          <div className="d-flex justify-content-between">
            { homeprojects.length>0?homeprojects.map(i=>(
               <div>
               <ProjectCard project={i}></ProjectCard>
             </div>
            )): <h1>No projects</h1>
            }
              

          </div>
        </marquee>

       </Container>
        <div>
          <Link to={'/projects'} style={{textDecoration:'none'}}><h4 className="text-center">View More Projects</h4></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

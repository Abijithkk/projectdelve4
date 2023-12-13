import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../components/Profile";
import Myprojects from "../components/Myprojects";
import Header from "../components/Header";
import ViewMyProjects from "../components/ViewMyProjects";
import { useNavigate } from "react-router-dom";





function Dashboard() {
  const [uname,setUname]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
      setUname((JSON.parse(localStorage.getItem("currentUser"))).userName)
    }
    else{
      alert("Please login First")
      navigate('/')
    }
  },[])
  return (
    <div className="w-100">
    <Header dashboard></Header>
      <Row>
        <Col lg={8}>
          <div className="py-2 px-3 mx-2 my-5 shadow ">
            <h3 style={{fontFamily:'Bungee',fontSize:'22px'}}>Welcome {uname}</h3>
           
            <hr />
           <Myprojects></Myprojects>
           <ViewMyProjects></ViewMyProjects>
          </div>
        </Col>
        
        <Col  lg={4}>
          <div>
          <Profile userName={uname}></Profile>
          </div>
        </Col>
       
      </Row>
    </div>
  );
}

export default Dashboard;

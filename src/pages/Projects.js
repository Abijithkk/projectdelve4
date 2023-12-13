import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectApi } from '../service/allApi'





function Projects() {
  const [allprojects,setAllProjects]=useState([])
  const [searchData,setSearchData]=useState("")

  const getAllProjects=async()=>{
    const result=await allProjectApi(searchData)
    setAllProjects(result.data)

  }
  useEffect(()=>{
    getAllProjects()
},[])

console.log(searchData);
  return (
    <div>
        <Header></Header>
        <div className='text-center container p-5'>
        <h1 className='mb-3'>Explore all Projects</h1>
        <div className='d-flex container mt-4 rounded w-75'>
            <input onChange={(e)=>setSearchData(e.target.value)}
  type="text" className='form-control shadow' placeholder='Search Product By Technology used'/>  
            <i onClick={getAllProjects} class="fa-solid fa-magnifying-glass me-3 border p-3 shadow text-info"></i>
        </div>
        </div>
        <div className='container p-5 my-5'>
            <Row>
                {allprojects.length>0?allprojects.map(i=>(
                  <Col >
                <ProjectCard project={i}></ProjectCard>
                </Col>
                )): <h1>No projects</h1> }
            </Row>
        </div>
    </div>
  )
}

export default Projects
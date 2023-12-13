import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../service/baseUrl';







function ProjectCard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <div className='w-100'>
   <Card onClick={handleShow} style={{ width: '18rem' }}>
    <Card.Img style={{height:'300px'}} variant="top" src={project?`${BASE_URL}/uploads/${project.projectImage}`:"https://i.postimg.cc/xjWpmqtm/business-team-brainstorming-and-discussing-startup-project-6140542.webp"} />
    <Card.Body>
      <Card.Title> <h4>{project?.title}</h4></Card.Title>
     
      
    </Card.Body>
  </Card>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Col>
          <img style={{height:'200px',width:'250px'}} src={project?`${BASE_URL}/uploads/${project.projectImage}`:"https://i.postimg.cc/xjWpmqtm/business-team-brainstorming-and-discussing-startup-project-6140542.webp"} alt="" />
          </Col>
          <Col>
          <p ><b>Project Description</b>: {project?.overView}</p>
          
          </Col>
          <p className='mt-2'><b>Technologies</b>:{project?.languages}</p>
          </Row>
          <hr />
        
        <div className='p-3'>
          <Link to={project?.website}>
          <i class="fa-solid fa-link text-info fa-2x"></i>
          </Link>
          <Link to={project?.gitHub}>
          <i class="fa-brands fa-github text-info fa-2x ms-2"></i>
          </Link>
         
         
        </div>
        </Modal.Body>
      </Modal>

  </div>

  )
}

export default ProjectCard
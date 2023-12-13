import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../service/baseUrl';
import { updateProjectApi } from '../service/allApi';
import { editResponseContext } from '../service/ContextShare';



function UpdateProject({project}) {

    const {setEditUpdate}=useContext(editResponseContext)
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setProjectInputs({
        title: "",
        overView: "",
        gitHub: "",
        website: "",
        projectImage: "",
        languages: "",
      });
    };
    const handleShow = () => setShow(true);
    
    const [preview,setPreview]=useState("")
    const [projectInputs,setProjectInputs]=useState({
        title:project.title,overView:project.overView,gitHub:project.gitHub,website:project.gitHub,projectImage:"",languages:project.languages
      })

    useEffect(()=>{
        if(projectInputs.projectImage){
            setPreview(URL.createObjectURL(projectInputs.projectImage))
        }
        else{
            setPreview("")
        }
    },[projectInputs.projectImage])  

    const handleUpdate=async(e)=>{
        e.preventDefault()
        const {title,languages,gitHub,website,overView,projectImage}=projectInputs
        if(!title || !languages || !gitHub || !website || !overView){
            alert("please fill all datas")
        }
        else{
            // api call
            // body
            const reqBody=new FormData()
            reqBody.append("title",title)
            reqBody.append("overView",overView)
            reqBody.append("gitHub",gitHub)
            reqBody.append("website",website)
            reqBody.append("languages",languages)
            preview?reqBody.append("projectImage",projectImage):
            reqBody.append("projectImage",project.projectImage)
      
            // header
            const token = localStorage.getItem("token");
          
            var headerConfig={}
            if(preview){
                var headerConfig = {
                  "Content-Type": "multipart/form-data", // or "application/json" based on your request
                  "access_token": `Bearer ${token}`
                };
            }
            else{
                var headerConfig={
                    "Content-Type":"application/json",
                    "access_token":`Bearer ${token}`
                   }
            }
            // project id
            const proId=project._id
            const result=await updateProjectApi(reqBody,headerConfig,proId)
            if(result.status==200){
                alert(`${result.data.title} updated`)

                // update context
                setEditUpdate(result.data)
                handleClose()
            }
            else{
                alert('update fail')
            }
        }
    }
  return (
    <>
         <span onClick={handleShow}>
              <i class="fa-solid fa-pen-to-square fs-4 text-dark"></i>
            </span>
            <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-info">
            Edit Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
            <label htmlFor="img1" className="text-center">
                
                <input onChange={(e)=>setProjectInputs({...projectInputs,["projectImage"]:e.target.files[0]})}  id="img1" style={{display:'none'}} type="file" />
                <img style={{height:'240px'}} className="w-100 mt-5" src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} alt="" />
            </label>
            </Col>
            <Col>
              <input name="title"
              onChange={(e)=>setProjectInputs({...projectInputs,["title"]:e.target.value})}
              value={projectInputs.title}
                className="form-control p-2 mt-3"
                type="text"
                placeholder="Project Name"
                style={{ border: "none" }}
              />
              <hr />
              <input  name="languages" 
              onChange={(e)=>setProjectInputs({...projectInputs,["languages"]:e.target.value})}
              value={projectInputs.languages}
                className="form-control p-2 mt-2"
                type="text"
                placeholder="Language Used"
                style={{ border: "none" }}
              />
              <hr />
              <input  name="gitHub" 
              onChange={(e)=>setProjectInputs({...projectInputs,["gitHub"]:e.target.value})}
              value={projectInputs.gitHub}
                className="form-control p-2 mt-2"
                type="text"
                placeholder="Github Link"
                style={{ border: "none" }}
              />
              <hr />
              <input  name="website" 
              onChange={(e)=>setProjectInputs({...projectInputs,["website"]:e.target.value})}
              value={projectInputs.website}
                className="form-control p-2 mt-2"
                type="text"
                placeholder="Website Link"
                style={{ border: "none" }}
              />
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <textarea  name="overView" 
              onChange={(e)=>setProjectInputs({...projectInputs,["overView"]:e.target.value})}
              value={projectInputs.overView}
                style={{ border: "none" }}
                className="form-control p-2 mt-3"
                type="text"
                placeholder="Project Overview"
              />
            </Col>
            <hr />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={(e)=>handleUpdate(e)}> 
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateProject
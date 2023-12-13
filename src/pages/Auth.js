import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi, registerApi } from '../service/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Auth({register}) {
const navigate=useNavigate()
  // state to store inputs
  const [user,setUser]=useState({
    userName:"",email:"",password:""
  })
// state to check validation
const [unameValid,setUnameValid]=useState(false)
const [emailValid,setEmailValid]=useState(false)
const [pswValid,setPswValid]=useState(false)


  const setInputs=(e)=>{
    const{name,value}=e.target
    if(name=='userName'){
      if(value.match(/^[a-zA-Z ]+$/)){
        setUnameValid(false)

      }
      else{
        setUnameValid(true)
      }
    }

  if(name=='email'){
    if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
      setEmailValid(false)

    }
    else{
      setEmailValid(true)
    }
  }

  if(name=='password'){
    if(value.match(/^[0-9a-zA-Z@]{3,8}$/)){
      setPswValid(false)

    }
    else{
      setPswValid(true)
    }
  }

    setUser({...user,[name]:value})
  }
  console.log(user);

const handleRegister=async(e)=>{
  e.preventDefault()
  const {userName,email,password}=user
  if(!userName || !email  || !password){
    toast.warn('Please fill all data', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else{
    const result=await registerApi(user)
    if(result.status==200){
      toast.success(`${result.data.userName}Account created suceessfully`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      // 
      setUser({userName:"",email:"",password:""})
      navigate('/login')
    }
    else{
      toast.error(result.response.data, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
}

const handleLogin=async(e)=>{
  e.preventDefault()
  const {email,password}=user
  if(!email  || !password){
    toast.warn('Please fill all data', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else{
    const result=await loginApi(user)
    if(result.status==200){
      // token
  
      // console.log(result.data.token);
      // store user datas in local storage
      localStorage.setItem("token",result.data.token)
      localStorage.setItem("currentUser",JSON.stringify(result.data.user));
      localStorage.setItem("currentId",result.data.user._id);

      toast.success(`login success`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      // 
      setUser({email:"",password:""})
      navigate('/dashboard')
    }
    else{
      toast.error(result.response.data, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
}

    const isRegisterForm=register?true:false
  return (
    <div id='rt'>
        <div className='container w-50 text-center ' style={{justifyContent:'center'}}>
          
         <h1 className='mt-3'>
            {
              isRegisterForm?'Sign Up':'Sign In'
            }


         </h1>
         <Row className='mt-3 bg-light' >
          <Col className='mt-3'>
          <img src="https://i.postimg.cc/TYrm20vM/1000-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh-transformed.jpg" style={{height:'220px'}} alt="" />
          </Col>
          
      <Col>
         <div className='mt-3'  > {
          
            isRegisterForm && 
            <>
            <FloatingLabel style={{borderStyle:'solid'}} controlId="floatingPassword" label="name">
            <Form.Control value={user.userName} onChange={(e)=>setInputs(e)} name='userName' type="text" placeholder="Enter Your Name" />
          </FloatingLabel>
{ unameValid&&          <p className='text-info'>include characters only</p>
}          </>
          }
          <FloatingLabel style={{borderStyle:'solid'}}
          
          controlId="floatingInput"
          label="Email address"
          className="mb-3 mt-3 "
        > 
        
          <Form.Control value={user.email} onChange={(e)=>setInputs(e)} name='email'  type="email" placeholder="name@example.com" />
{ emailValid&&     <p className='text-info'>Email is not valid</p>
}        </FloatingLabel>
        <FloatingLabel style={{borderStyle:'solid'}} controlId="floatingPassword" label="Password">
          <Form.Control value={user.password} onChange={(e)=>setInputs(e)} name='password' type="password" placeholder="Password" />
{  pswValid&&        <p className='text-info'>invalid password</p>
}
        </FloatingLabel>
  
        </div>
        </Col>
      
        <div className='mt-3 '>
        {
          isRegisterForm?
          <Button onClick={(e)=>handleRegister(e)} className='bg-black text-white mb-3'>Register</Button>:
          <Button onClick={(e)=>handleLogin(e)} className='bg-black text-white mb-3'>Login</Button>
        }
          </div>
          </Row>
          <div>
            {
              isRegisterForm?
              <p>Already have an account ? <Link to={'/login'} style={{textDecoration:'none'}}>Login Here</Link></p>:
              <p>New User ? <Link to={'/register'} style={{textDecoration:'none'}}>Sign-Up Here</Link></p>
            }
            
          </div>
      
      
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Auth
import { MDBBtn,MDBInput } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addProjectAPI } from '../services/allAPI';



function MyProjects() {

  const [projectDetails,setProjectDetails]=useState({
    title:"",
    language:"",
    projectImg:"",
    github:"",
    linkedin:"",
    overview:""
  })

  //to hold image url
  const [imagePreview,setImagePreview]=useState()

  // to hold token
  const [token,setToken]=useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setProjectDetails({
      title:"",
      language:"",
      projectImg:"",
      github:"",
      linkedin:"",
      overview:""
    })
    setImagePreview("")
  };


   const handleAdd = async (e) => {
    e.preventDefault()
    //  function for add a new project details
    const { title,language,projectImg,github,linkedin,overview} = projectDetails
    if(!title || !language || !projectImg || !github || !linkedin || !overview){
      toast.error("please fill all fields")
    }else {
       const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("projectImg",projectImg)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      reqBody.append("overview",overview)
      toast.success('project data added successfully')
      

      // Creation of request header
     if(token){
     var reqHeader= {
        "content-type" : "multipart/form-data",//image data
        "Authorization" : `Bearer ${token}` // token is appended to the request header
      }
     }

      // API request/call
      const result = await addProjectAPI( reqBody,reqHeader)
      console.log(result);

      if(result.status == 200) {
        
        console.log(result.data); //actual data

      }else{
        console.log(result.response.data); // error
      }
    }


   }

   useEffect(() => {
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else{
      setToken("")
    }
   })

  useEffect(()=>{
    if(projectDetails.projectImg){
      //convert projectimg into url
      setImagePreview(URL.createObjectURL(projectDetails.projectImg))
    }
  },[projectDetails.projectImg])
  return (
    <>
      <div className='card shadow p-3 m-4 '>
        <h3>My Projects</h3>
        <div className='ms-auto'>
          <MDBBtn  onClick={handleShow}>Add Project</MDBBtn>
        </div>
        <div className='border border-2 p-3 d-flex align-items-center m-2'>
          <h4>Project Title</h4>
          <div style={{marginLeft:'180px'}}>
            <MDBBtn className='m-3'><i class="fa-regular fa-pen-to-square"></i></MDBBtn>
            <MDBBtn className='m-3'><i class="fa-brands fa-github"></i></MDBBtn>
            <MDBBtn className='m-3'><i class="fa-solid fa-trash"></i></MDBBtn>
          </div>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col>
          <label>
          <input onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})} type="file" style={{display:'none'}} />
            <img width={'400px'} src={imagePreview?imagePreview:"https://static.vecteezy.com/system/resources/previews/000/273/730/original/project-management-icon-set-vector.jpg"} alt="" />
            </label>
          </Col>
         
          <Col>
          <div className='m-3'>
        <MDBInput value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} className='mb-3' label='Project Title' id='form1' type='text' />
        <MDBInput value={projectDetails.language} onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})}   className='mb-3'  label='Language to be used' id='form1' type='text' />
        <MDBInput value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}  className='mb-3' label='Enter your Github link' id='form1' type='text' />
        <MDBInput value={projectDetails.linkedin} onChange={e=>setProjectDetails({...projectDetails,linkedin:e.target.value})}  className='mb-3' label='Enter your LinkedIn link' id='form1' type='text' />
        <MDBInput value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}  className='mb-3' label='Project Overview' id='form1' type='text' />


        <div className='text-center'>
        </div>
        </div>
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>
      </div> 
    </>
  )
}

export default MyProjects
import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import img from '../assets/project.jpg'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'


function Home() {

  const navigate = useNavigate()

  const [isLoggedin,setLoggedIn] = useState(false) //to hold login status


  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if(token){
      setLoggedIn(true)
    }
    else{
      setLoggedIn(false)
    }
  },[])

 

  

  return (
    <div>
      <Header/>

        <div className="container">

          <Row>

            <Col className='m-4'>
              <h1>Project Fair</h1>
              <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error natus quia dolores quae architecto sapiente corporis eligendi
                 ratione dolore! Dolores sapiente corporis voluptatum explicabo sequi cupiditate dolorem, ducimus labore ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsum repudiandae debitis repellendus, impedit ducimus, cumque, numquam provident fugiat vero cum ipsa fugit ea maiores id quam alias libero nemo iste!</p>
                 
                  { isLoggedin ?
                  <MDBBtn onClick={()=>navigate('/dashboard')} >Manage your projects</MDBBtn>
                 :
                  <MDBBtn onClick={()=>navigate('/register')} >Get started</MDBBtn>}
            </Col>

            <Col>

            <img src={img} alt="" style={{borderRadius:'20px'}} />
            
            </Col>

          </Row>

          <Row>

            <Col>

            <div className='container m-5'>
            <b><h1>Explore our projects</h1></b>
            <marquee scrollAmount={15}>

            <ProjectCard/>

            </marquee>


            
            <MDBBtn onClick={() => navigate('/projects')}>
            View more

            </MDBBtn>
           
            
            
            
            

           
           
          </div>
            </Col>
          </Row>


        </div>

    </div>
  )
}

export default Home
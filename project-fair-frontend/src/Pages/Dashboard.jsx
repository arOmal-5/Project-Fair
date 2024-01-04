import React, { useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import MyProfile from '../Components/MyProfile'
import { useEffect } from 'react'

function Dashboard() {

  const [userName,setUserName] = useState('')



  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('existingUser'))
    setUserName(data.username)

    console.log(userName);
    

  },[])
  return (
    <div>

      <Header insidedashboard/>

      <h2>welcome {userName}</h2>

      <Row>
        <Col>
        {/* My projects */}
        <MyProjects/>
        
        </Col>


        <Col>
        {/* My profile */}
        <MyProfile/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
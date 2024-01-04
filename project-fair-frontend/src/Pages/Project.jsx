import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import {Row,Col} from 'react-bootstrap'
import Header from '../Components/Header'

function Project() {
  return (
    <div>
      <Header/>

      <div className='container text-center' >
        <h1 className='m-5'>All Projects</h1>

        <div className='container w-25 mb-5'>
        <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search by technologies' aria-label='Search' />
            
          </form>
          <MDBBtn color='secondary' className='m-3'> <i className='fa fa-magnifying-glass'></i> Search</MDBBtn>
        </div>
        <Row>

<Col>

<ProjectCard/>


</Col>
</Row>
      </div>

     


      
    </div>
  )
}

export default Project
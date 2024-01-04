import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectCard(id,img) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
            <div style={{display:'flex', flexDirection:'row', gap:'1rem'}} >

            {data.map((item) => (

<MDBCard  onClick={handleShow}>
<MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
  <MDBCardImage src={item.img} style={{width:'100rem', height:'20rem'}} fluid alt='...' />
  <a>
    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
  </a>
</MDBRipple>
<MDBCardBody>
  
</MDBCardBody>
      </MDBCard>
            ))}

            
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='xl'
        
        
      >
        <Modal.Header closeButton>
          <Modal.Title>PROJECT FOSSIL GEN 5 </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className="row">
            <div className="col-md-6">
            <img src="https://i.pinimg.com/564x/26/94/8b/26948bf8ebfa2e280f1eecc6039a2336.jpg" style={{borderRadius:'15px'}} alt="" />
            </div>
            <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita sequi, totam, voluptatum aperiam illo 
            ncidunt temporibus explicabo debitis minima eos hic laudantium dolores. Consequuntur, dicta officiis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam maxime mollitia architecto reprehenderit
             non in labore et. Veniam ea voluptatem optio assumenda esse hic ullam dolor neque, velit, recusandae ad.
              Consequatur, eos error.</p>
            </div>
            </div>
         

         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">View</Button>
        </Modal.Footer>
               </Modal>

            </div>

    </div>
  )
}



  const data = [
    { id:1,
      img:'https://i.pinimg.com/564x/90/00/b8/9000b81ffa06e691cf1bc2c7f17c4e71.jpg',

    },
    { id:2,
      img:'https://i.pinimg.com/564x/84/25/be/8425bee7ff89008eeecf1777be6f536f.jpg',

    },
    { id:3,
      img:'https://i.pinimg.com/564x/97/7d/72/977d720fec3d5e5410415e9cf2fb9eb3.jpg',

    },
    { id:4,
      img:'https://i.pinimg.com/564x/26/94/8b/26948bf8ebfa2e280f1eecc6039a2336.jpg',

    }
  ]




 

export default ProjectCard
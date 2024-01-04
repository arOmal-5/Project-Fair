import React from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function MyProfile() {

    const [open, setOpen] = useState(false);

  return (
    <>

            <div className='card shadow  p-4 m-4'  style={{display:'flex', alignItems:'center', height:'25rem'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                <h3>My profile</h3>
                <MDBBtn className='ms-2' onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}>
                <i class="fa-solid fa-bars"></i>
                </MDBBtn>
                </div>
                
                <Collapse in={open} >

                <label className='w-50' >

<input type="file" style={{display:'none'}} />
<img src="https://vectorified.com/images/profile-picture-icon-27.png" alt="" style={{width:'5rem'}}/>




<div >

<MDBInput className='m-2' label='Enter your name' id='form1' type='text'  />
<MDBInput className='m-2' label='Enter your github link' id='form1' type='text' />
<MDBInput className='m-2 mb-5' label='Enter your linkdin link' id='form1' type='text' />


<MDBBtn>

Update
</MDBBtn>
</div>
</label>
                </Collapse>


            </div>

    
    </>
  )
}

export default MyProfile
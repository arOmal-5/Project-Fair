import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import { loginAPI, registerAPI } from '../services/allAPI'
import { toast } from 'react-toastify';

function Auth({register}) {

    const navigate = useNavigate()

    const [userData,setUserData] = useState({
        username: '',
        email: '',
        password: ''
    })

  

    const handleRegister = async (e) => {
        e.preventDefault()

        // eslint-disable-next-line no-sequences
        if(!userData.username || !userData.email || !userData.password) {
            alert('Please fill in all fields')
        } else {
        // to store the user data
        const result = await registerAPI(userData)
        console.log(result)
        if(result.status===200){
            alert (` has been registered`)
            navigate('/login')
        }
        
    }
} 
  const handleLogin = async (e) => {
    e.preventDefault()

    if(!userData.email || !userData.password) {
        alert('Please fill in all fields')
    } else {
        const result = await loginAPI(userData)
        console.log(result);
        if(result.status===200){
            alert (`${result.data.username} has been logged in`)
            // to set token into sesssion storage
            sessionStorage.setItem('existingUser',JSON.stringify(result.data.existingUser))
            // to set token into sesssion storage
            sessionStorage.setItem("token",result.data.token)
            navigate('/')
            setUserData({
                email: '',
                password: ''
            })
        }else{
            toast.error("invalid username or password")
        }
  }}



    

    const registerForm = register? true : false

  return (
    <div>


        <Header/>
        <div style={{width:'100%', height:'550px'}} className='d-flex
     justify-content-center align-items-center '>
        <div className='container'>
                
            <div className='card shadow p-5 '  style={{backgroundColor:'255, 255, 255, 0.257'}}>
              <div className="row">
                    <div className='col'>
                    <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-solid fa-arrow-left m-2"></i> Back to Home</Link>
                        <img width={'400px'} src="https://i.pinimg.com/564x/63/a9/4c/63a94ceff0ee626d3d30c528df24cbba.jpg" alt="" />
                    </div>
                    <div className='col text-center'>
                        <div className='d-flex justify-content-center flex-column'>
                           <img src="https://tse1.mm.bing.net/th?id=OIP.EOzYLRNX6mIm3MvJTzH-RwHaBg&pid=Api&P=0&h=180" alt="" style={{width:'15rem'}} />
                            <h5 className='m-4 text-center'>{
                                registerForm?'Sign Up to your Account':'Sign in to your Account'
                                }</h5>

                            <form>
                                {
                                registerForm && 
                                <input value={userData.username} onChange={(e) => setUserData({...userData,username:e.target.value})} type="text" name="" id="" placeholder='Enter your Name' className='form-control mb-3' />
                                }
                                 
                                    <input value={userData.email} onChange={(e) => setUserData({...userData,email:e.target.value})} type="text" name="" id="" placeholder='Enter your Email' className='form-control mb-3' />
                                    <input value={userData.password} onChange={(e) => setUserData({...userData,password:e.target.value})} type="text" name="" id="" placeholder='Enter your Password' className='form-control mb-3' />
                                    
                                    {
                                        registerForm?
                                        <div className='text-center m-3'>
                                        <MDBBtn onClick={(e)=>handleRegister(e)} >Register</MDBBtn>
                                        <Link to={'/login'} style={{textDecoration:'none'}} >
                                        <p className='m-3'> Already have an aaccount  Login</p>
                                        </Link>
                                        </div>:
                                        <div className='text-center m-3'>
                                        <MDBBtn onClick={(e)=> handleLogin(e)}>Login</MDBBtn>
                                        <Link to={'/register'} style={{textDecoration:'none'}} >
                                        <p className='m-3'>New to here? Please Register Here</p>
                                        </Link>
                                        </div>
                                    }
                                  
                            
                               
                            </form>
                        
                        </div>
                    </div>
              </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Auth
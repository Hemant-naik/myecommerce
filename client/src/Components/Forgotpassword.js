import React, { useState } from 'react'
import axios from 'axios'

function Forgotpassword() {
  const[email,setemail]=useState('')
  const[status,setStatus]=useState('')

  const handleChange = (e) =>{
      //const {name,value}= e.target
      setemail(e.target.value);
      console.log(e.target.value)
  }

  const SubmitForgotPassword=(e)=>{
     
      //console.log(formValues.username)
      e.preventDefault();
      axios.post("http://localhost:3001/forgotpass",{
       email:email
      
      }).then((response)=>{
        console.log(response);
        if(response.data.length>0)
        {
          localStorage.setItem('user',email)
          window.location="http://localhost:3000/otp/"
        }
        else
        {
          setStatus('Sorry..! Invalid Email')
        }
      }) 
      .catch(error => {
        console.log(error)
    }) 
  
    }
  
  return (
    <div>
    <div className="card text-center" style={{width: "300px",margin:"auto",marginTop:"10vh"}}>
    <div className="card-header h5 text-white bg-primary">Password Reset</div>
    <div className="card-body px-5">
      <form onSubmit={SubmitForgotPassword}>

      <p className="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div className="form-outline">
            <input type="email"  className="form-control my-3" value={email} name='email'  onChange={handleChange}/>
            <label className="form-label">Email input</label>
        </div>
        <button className='btn btn-success' type="submit"> Forgot</button>
        

      </form>
      <p className='text-danger'> {status}</p>
      
    </div>
</div>  


        </div>
  )
}

export default Forgotpassword

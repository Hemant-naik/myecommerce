import React, { useState } from 'react'
import  axios  from 'axios'

function Otp() {
  const[otp,setotp]=useState('')
  const [status,setstatus]=useState('')

  const handleChange=(e)=>{
    //const {name,value}=e.target
    setotp(e.target.value);
    console.log(e.target.value)
  }

  const Submitotp=(e)=>{
    // console.log(formvalues.username)
    e.preventDefault();
    axios.post("http://localhost:3001/otp",{
      otp:otp
    }).then((Response)=>{
      console.log(Response);
      if(Response.data.length>0)
      {
        window.location="http://localhost:3000/resetpassword/"
      }
      else{
        setstatus('Sorry..! invalid otp')
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div>
     <section className="container-fluid  d-block">
  <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-5" style={{minWidth: "500px"}}>
        <div className="card bg-white mb-5 mt-5 border-0" style={{boxShadow:" 0 12px 15px rgba(0, 0, 0, 0.02)"}}>
          <div className="card-body p-5 text-center">
           <form onSubmit={Submitotp}>

           <h4>Verify</h4>
            <p>Your code was sent to you via email</p>

            <div className="otp-field mb-4" style={{display:"flex",justifyContent:"space-around"}}>
              <input type='number'  value={otp} name='otp' className='form-control my-3' 
              onChange={handleChange}></input>
                        </div>


            <button className="btn btn-primary mb-3">
              Verify
            </button>

            <p className="resend text-muted mb-0">
              Didn't receive code? <a href="/">Request again</a>
            </p>

           </form>
           <p className='text-danger'>{status}</p>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
  )
}

export default Otp

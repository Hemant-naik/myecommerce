import axios from 'axios'
import React, { useState } from 'react'

function Reg() {
  const initialvalues={fname:"",	lname:"",	dob:"",	gender:"",	address:"",	pincode:"",	email:"",
  	password:"",	mobile_no:""}
  const [formvalues,setformvalues]=useState(initialvalues)

  const handleChange=(e)=>{
    const {name,value}=e.target
    setformvalues({...formvalues,[name]:value})
    console.log(formvalues.fname)
  }
  const FormFeedback=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/reg",{
      feeddata:formvalues
    }).then((Response)=>{
      console.log(Response)
      alert("Thank you for Registration")
    }).catch((err)=>{
      console.log(err)
    })
 
   }
       
  return (
    <div>
      <section className="vh-100">
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>REGISTRATION</b></h2>
              <hr></hr>

              <form onSubmit={FormFeedback}> 


                <div className="form-outline mb-4">
                  <label><b>Fname</b></label>
                  <input type="text" value={formvalues.fname} name='fname' onChange={handleChange}
                  className="form-control form-control-lg" />
                </div>

                <div className="form-outline mb-4">
                  <label><b>Lname</b></label>
                  <input type="text" value={formvalues.lname}  name='lname' onChange={handleChange}
                  className="form-control form-control-lg" />
                </div>

                <div className="form-outline mb-4">
                <label><b>Date</b></label>
                  <input type="date" value={formvalues.dob} name='dob' onChange={handleChange}
                  className="form-control form-control-lg" />
                </div>
                
                <div className="form-outline mb-4">
                <label><b>Gender</b></label>
                  <b className='ms-3'>male</b><input type="radio" className="form-check-input"  checked={formvalues.gender==='male'} name='gender' value='male' onChange={handleChange} /> 
                  <b>Female</b><input type="radio"  checked={formvalues.gender==='female'} name='gender'  value='female'  onChange={handleChange} 
                   className="form-check-input"  /> 
                </div>
                <div className="form-outline mb-4">
                <label><b>Address</b></label>
                  {/* <textarea defaultValue={formvalues.address} name='address' onChange={handleChange}
                   className="form-control form-control-lg"> </textarea> */}

                <input type="text" value={formvalues.address} name='address' onChange={handleChange}
                   className="form-control form-control-lg" />

                </div>
                <div className="form-outline mb-4">
                <label><b>Pincode</b></label>
                  <input type="text" value={formvalues.pincode} name='pincode' onChange={handleChange}
                   className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                <label><b>Email</b></label>
                  <input type="email"  value={formvalues.email} name='email' onChange={handleChange}
                   className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                <label><b>password</b></label>
                  <input type="password"  value={formvalues.password} name='password' onChange={handleChange} 
                   className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                <label><b>Mobile_no</b></label>
                  <input type="text"  value={formvalues.mobile_no} name='mobile_no'
                   className="form-control form-control-lg"  onChange={handleChange}/>
                </div>

                <div className="d-flex justify-content-center ">
                  <button type="submit" 
                    className=" text-body btn btn-light" style={{width:"170px", height:"40px",
                    border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Reg;

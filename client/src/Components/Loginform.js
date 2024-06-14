import React, { useState } from 'react'
import axios from 'axios'


const Loginform = () => {
const initialvalues = { username:"",	password:"",	utype:"" }
const [formvalues, setformvalues] = useState(initialvalues)


  const handleChange = (e) => {
    const { name, value } = e.target
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues.username)
  }

  const FormFeedback = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      feeddata: formvalues
    }).then((Response) => {
      console.log(Response)
      alert("Thank you for your Login")
    })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>

      <section className="vh-100">
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5"><b>Login</b></h2>
                    <hr></hr>

                    <form onSubmit={FormFeedback}>



                      <div className="form-outline mb-4">
                        <label ><b>UserName</b></label>
                        <input type="text" value={formvalues.username} name='username'
                          className="form-control form-control-lg" onChange={handleChange} required />
                      </div>

                      <div className="form-outline mb-4">
                        <label ><b>Password</b></label>
                        <input type="number" value={formvalues.password} name='password' className="form-control form-control-lg"
                          onChange={handleChange} required />
                      </div>

                      <div className="form-outline mb-4">
                        <label  ><b>utype</b></label>
                        <input type="text" value={formvalues.utype} name='utype'
                          className="form-control form-control-lg" onChange={handleChange} required />
                      </div>

               

                      <div className="d-flex justify-content-center">
                        <button type="submit" style={{
                          width: "170px", height: "40px",
                          border: "2px solid silver", fontWeight: "bold",
                          boxShadow: "2px 3px 4px 2px  silver ", borderRadius: "3%"
                        }}>Submit</button>
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

export default Loginform;

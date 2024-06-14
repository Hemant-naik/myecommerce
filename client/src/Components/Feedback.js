import React, { useState } from 'react'
import axios from 'axios'

const Feedback = () => {
  const initialvalues = { user_id: "", pid: "", about_product: "", about_service: "", suggetions: "" }
  const [formvalues, setformvalues] = useState(initialvalues)


  const handleChange = (e) => {
    const { name, value } = e.target
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues.user_id)
  }

  const FormFeedback = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/Feedback", {
      feeddata: formvalues
    }).then((Response) => {
      console.log(Response)
      alert("Thank you for your feedback")
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
                    <h2 className="text-uppercase text-center mb-5"><b>FEEDBACK</b></h2>
                    <hr></hr>

                    <form onSubmit={FormFeedback}>



                      <div className="form-outline mb-4">
                        <label ><b>USER_Id</b></label>
                        <input type="text" value={formvalues.user_id} name='user_id'
                          className="form-control form-control-lg" onChange={handleChange} required />
                      </div>

                      <div className="form-outline mb-4">
                        <label ><b>P_Id</b></label>
                        <input type="number" value={formvalues.pid} name='pid' className="form-control form-control-lg"
                          onChange={handleChange} required />
                      </div>

                      <div className="form-outline mb-4">
                        <label  ><b>about_product</b></label>
                        <input type="text" value={formvalues.about_product} name='about_product'
                          className="form-control form-control-lg" onChange={handleChange} required />
                      </div>

                      <div className="form-outline mb-4">
                        <label  ><b>about_service</b></label>
                        <input type="text" value={formvalues.about_service} name='about_service'
                          className="form-control form-control-lg" onChange={handleChange} required />
                      </div>

                      <div className="form-outline mb-4">
                        <label ><b>suggetions</b></label>
                        <input type="text" value={formvalues.suggetions} name='suggetions'
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

export default Feedback;

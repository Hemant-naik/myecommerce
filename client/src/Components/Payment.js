import React,{useState} from 'react'
import axios from 'axios'

function Payment() {
  const initialvalues = { order_id:"",	user_id:"",	total_amount:"",	paid_date:""}
  const [formvalues, setformvalues] = useState(initialvalues)


  const handleChange = (e) => {
    const { name, value } = e.target
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues.user_id)
  }

  const FormFeedback = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/Payment", {
      feeddata: formvalues
    }).then((Response) => {
      console.log(Response)
      alert("Thank you for your payment")
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
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>PAYMENT</b></h2>
              <hr></hr>

              <form onSubmit={FormFeedback}>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Order_Id</b></label>
                  <input type="password" value={formvalues.order_id} name='order_id'
                   className="form-control form-control-lg"  onChange={handleChange}/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>User_Id</b></label>
                  <input type="text" value={formvalues.user_id} name='user_id' 
                  className="form-control form-control-lg" onChange={handleChange} />
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Total_Amount</b></label>
                  <input type="text" value={formvalues.total_amount} name='total_amount' 
                  className="form-control form-control-lg" onChange={handleChange} />
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Paid_Date</b></label>
                  <input type="date" value={formvalues.paid_date} name='paid_date' 
                  className="form-control form-control-lg" onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className=" text-body" style={{width:"170px", height:"40px",
                    border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Submit</button>
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

export default Payment

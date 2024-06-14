import axios from 'axios';
import React, {useState} from 'react'
import {useParams} from 'react-router-dom';

const uid=localStorage.getItem('user')
const Qty=()=>{
  const {id}=useParams();
  console.log("Item Id:" +id)
  const [qty,setqty]=useState(1)

  const handleChange=(e)=>{
    setqty(e.target.value)
    console.log(e.target.value)
  }

  const SendQty=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:3001/buynow/${id}`,{
      qty:qty,
      id:id,
      uid:uid
    }).then((Response)=>{
      console.log(Response);
      alert("Order has been placed succesfully")
      window.location="http://localhost:3000/userhome"
    })
    .catch(error =>{
      console.log(error)
    })
  }
  

  return (
    <div>
      
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      {/* <div className="row d-flex justify-content-center align-items-center h-100"> */}
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>BUY PRODUCT</b></h2>
              <hr></hr>
              <form onSubmit={SendQty}>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Quantity</b></label>
                  <input type="number"  min={1}className="form-control form-control-lg"
                   onChange={handleChange} value={qty} name='qty' required/>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn" style={{width:"170px", height:"40px",
                    border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Send</button>
                </div>
                </form>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  </div>


    </div>
  )
}


export default Qty;




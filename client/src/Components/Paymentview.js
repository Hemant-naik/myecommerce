import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Paymentview() {
    const [FeedbackData,setFeedbackData]=useState([])
    useEffect(()=>{
        getFeedback();
    })
    const getFeedback=async()=>{
        const result=await axios.get('http://localhost:3001/viewpayment');
        setFeedbackData(result.data)
        console.log(result.data)
    }
    const Deletepayment=id=>{
        axios.delete(`http://localhost:3001/delpayment/${id}`)
        .then(Response=>{
            getFeedback();
        })
    }

  return (
    <div>
      <div className='container-fluid mt-2'>
        <div className='row'>
            <h1>Payment Details</h1>
            <table className='table table-bordered table-hover mt-2'>
                <thead className='table-primary'>
                    <tr>
                        <th>#</th>
                        <th>order_id</th>
                        <th> user_id</th>
                        <th>total_amount</th>
                        <th>paid_date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FeedbackData.map((data,index)=>{
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.order_id}</td>
                                <td>{data.user_id}</td>
                                <td>{data.total_amount}</td>
                                <td>{data.paid_date}</td>
                                

                                <td><button className='btn btn-danger' 
                                onClick={()=> Deletepayment (data.id)}>Delete</button></td>


                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>

    </div>
  )
}

export default Paymentview

// nav enta enta value kottidru anta show madu program 
import React from 'react';
import axios from 'axios';
import  { useEffect, useState } from 'react';


const  Feedbackview=()=> {
    const [FeedbackData,setFeedbackData]=useState([])
    useEffect(()=>{
        getFeedback();
    })
    const getFeedback=async()=>{
        const result=await axios.get('http://localhost:3001/viewfeedback');
        setFeedbackData(result.data)
        console.log(result.data)
    }

    const Deletefeedback=id=>{
        axios.delete(`http://localhost:3001/delfeed/${id}`)
        .then(Response=>{
            getFeedback();
        })
    }
  return (
    <div>
      <div className='container-fluid mt-2'>
        <div className='row'>
            <h1>Feedback Details</h1>
            <table className='table table-bordered table-hover mt-2'>
                <thead className='table-primary'>
                    <tr>
                        <th>#</th>
                        <th>user_id</th>
                        <th> pid</th>
                        <th>about_product</th>
                        <th>about_service</th>
                        <th>suggetions</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FeedbackData.map((data,index)=>{
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.user_id}</td>
                                <td>{data.pid}</td>
                                <td>{data.about_product}</td>
                                <td>{data.about_service}</td>
                                <td>{data.suggetions}</td>
                            
                            {/* //delete form */}
                                <td><button className='btn btn-danger' 
                                onClick={()=> Deletefeedback (data.id)}>Delete</button></td>
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

export default Feedbackview

import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Regview() {
    const [FeedbackData,setFeedbackData]=useState([])
    useEffect(()=>{
        getFeedback();
    })
    const getFeedback=async()=>{
        const result=await axios.get('http://localhost:3001/viewreg');
        setFeedbackData(result.data)
        console.log(result.data)
    }

    const Deletereg=id=>{
        axios.delete(`http://localhost:3001/delreg/${id}`)
        .then(Response=>{
            getFeedback();
        })
    }


  return (
    <div>
      <div className='container-fluid mt-2'>
        <div className='row'>
            <h1>Register Details</h1>
            <table className='table table-bordered table-hover mt-2'>
                <thead className='table-primary'>
                    <tr>
                        
                        <th>#</th>
                        <th>fname</th>
                        <th>lname</th>
                        <th>dob</th>
                        <th>gender</th>
                        <th>address</th>
                        <th>pincode</th>
                        <th>email</th>
                        <th>password</th>
                        <th>mobile_no</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        FeedbackData.map((data,index)=>{
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.dob}</td>
                                <td>{data.gender}</td>
                                <td>{data.address}</td>
                                <td>{data.pincode}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                <td>{data.mobile_no}</td>
                              

                                <td><button className='btn btn-danger' 
                                onClick={()=> Deletereg(data.id)}>Delete</button></td>


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

export default Regview

import React, { useState ,useEffect } from 'react'
import axios from 'axios'

function Categoryview() {
    const [FeedbackData,setFeedbackData]=useState([])
    useEffect(()=>{
        getFeedback();
    })
    const getFeedback=async()=>{
        const result=await axios.get(`http://localhost:3001/categoryview`);
        setFeedbackData(result.data)
        console.log(result.data)
    }
    const Deletecategory=id=>{
        axios.delete(`http://localhost:3001/delcategory/${id}`)
        .then(Response=>{
            getFeedback();
        })
    }
  return (
    <div>
      <div className='container-fluid mt-2'>
        <div className='row'>
            <h1>Category Details</h1>
            <table className='table table-bordered table-hover mt-2'>
                <thead className='table-primary'>
                    <tr>
                        <th>#</th>
                <th>category_name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FeedbackData.map((data,index)=>{
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.category_name}</td>
                                <td><button className='btn btn-danger' 
                                onClick={()=> Deletecategory(data.id)}>Delete</button></td>
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

export default Categoryview;

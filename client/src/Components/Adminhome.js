import React,{useState,useEffect}from 'react'
import axios from 'axios';

function Adminhome() {
    const [FeedbackData,setFeedbackData]=useState([])
    useEffect(()=>{
        getFeedback();
    })
    const getFeedback=async()=>{
        const result=await axios.get('http://localhost:3001/viewProduct');
        setFeedbackData(result.data)
        console.log(result.data)
    }
    const Deleteproduct=id=>{
        axios.delete(`http://localhost:3001/delproduct/${id}`)
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
                        <th>category</th>
                        <th> product_name</th>
                        <th>qty</th>
                        <th>uom</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>image</th>
                        <th>description</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        FeedbackData.map((data,index)=>{
                            return (<tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.category}</td>
                                <td>{data.product_name}</td>
                                <td>{data.qty}</td>
                                <td>{data.uom}</td>
                                <td>{data.price}</td>
                                <td>{data.stock}</td>
                                <td>{data.image}</td>
                                <td>{data.description}</td>

                                <td><button className='btn btn-danger' 
                                onClick={()=> Deleteproduct (data.id)}>Delete</button></td>



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

export default Adminhome;

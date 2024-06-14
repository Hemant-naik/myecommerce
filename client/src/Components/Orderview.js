import React from 'react'
import { useState,useEffect } from 'react';
import axios  from 'axios';

const uid = localStorage.getItem('user')

const Orderview = () => {
    const[MyorderData, setMyorderData] = useState([])
    useEffect(()=>{
        getMyorder();

    },[]);

    const getMyorder = async() =>{
        const result = await axios.get(`http://localhost:3001/myorder/${uid}`);
        setMyorderData(result.data);
        console.log(result.data)
    };

    

   

  return (
    <div>
        <div className='row'>
            <h1>My order Details</h1>
            <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
             <tr>
                <th>#</th>
                {/* <th>user_id</th> */}
                <th>product_name</th>
                <th>qty</th>
                <th>price</th>
                <th>total</th>
                <th>order_date</th>
                <th>order_time</th>
                <th>order_status</th>
                <th>payment_status</th>
                <th colSpan={2} align='center' className='text-white bg-danger'>Action</th>
               
             </tr>
            </thead>
             
             <tbody>
                {
                    MyorderData.map((data,index)=>{
                        let Message
                        if(data.payment_status==='Paid'){
                            Message=<div className='text-primary fs-4 fw-bold'>Paid</div>

                        }else{
                            Message=<div className='text-primary fs-4 fw-bold'>
                                <a href={`/paybill/${data.id}/${data.total}`} 
                            style={{textDecoration:"none"}}>Pay Now</a></div>
                        }

                        
                    
                        return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            {/* <td>{data.user_id}</td> */}
                            <td>{data.product_name}</td>
                            <td>{data.qty}</td>
                            <td>{data.price}</td>
                            <td>{data.total}</td>
                            <td>{data.order_date}</td>
                            <td>{data.order_time}</td>
                            <td className='text-success fs-4 fw-blod'>{data.order_status}</td>
                            <td className='text-danger fs-4 fww-bold'>{data.payment_status}</td>
                            <td>{Message}</td>
                        </tr>)
                        
                    }
                    
                    )};
                
                
             </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default Orderview;
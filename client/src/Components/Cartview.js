

import React from 'react'
import { useState,useEffect } from 'react';
import axios  from 'axios';
const uid = localStorage.getItem('user');
let OrderAmount=0;
console.log(OrderAmount)


const Cartview = () => {
    const[MycartData, setMycartData] = useState([])
    useEffect(()=>{
        getMycart();

    });

    const getMycart = async() =>{
        const result = await axios.get(`http://localhost:3001/mycart/${uid}`);
        setMycartData(result.data);
        console.log(result.data);
    };

    const Deletecart = id =>{
        
        axios.delete(`http://localhost:3001/delmycart/${id}`)
        .then(response=>{
         getMycart();
 
        });
     }

   

  return (
    <div>
        <div className='row'>
            <h1>Mycart Details</h1>
            <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
             <tr>
                <th>#</th>
                <th>user_id</th>
                <th>product_name</th>
                <th>qty</th>
                <th>price</th>
                <th>total</th>
                <th>order_date</th>
                <th>order_time</th>
                <th>order_status</th>
                <th>payment_status</th>
                <th>Action</th>
             </tr>
            </thead>
             
             <tbody>
                {
                    MycartData.map((data,index)=>{
                    return(<tr key={data.id}>
                        <td>{index+1}</td>
                        <td>{data.user_id}</td>
                        <td>{data.product_name}</td>
                        <td>{data.qty}</td>
                        <td>{data.price}</td>
                        <td>{data.total}</td>
                        <td>{data.order_date}</td>
                        <td>{data.order_time}</td>
                        <td>{data.order_status}</td>
                        <td>{data.payment_status}</td>
                        <td onClick={()=> Deletecart(data.id)}><i class=" text-danger fs-3 fa-solid fa-delete-left"></i></td>
                    </tr>)
                    })
                }
               
             </tbody>
             <tr className='bg-success text-white'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='text-white fs-3'> ₹{OrderAmount = MycartData.reduce((total,item)=> 
                    total + (item.total),0)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                </tr>

            </table>
            <p className='text-center'><button className='btn btn-warning fs-5 fw-bold '>
                <a href={`paybill_next/${OrderAmount}`} 
                style={{textDecoration:"none",color:"white"}}>Place Order</a></button></p>

        </div>
      
    </div>
  )
}

export default Cartview;
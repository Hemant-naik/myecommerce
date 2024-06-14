import React ,{ useState,useEffect } from 'react'
import axios  from 'axios';

// const uid = localStorage.getItem('user');
let OrderAmount=0;
console.log(OrderAmount)


const Todaysorder = () => {
    const[MycartData, setMycartData] = useState([])
    useEffect(()=>{
        getMycart();

    });

    const getMycart = async() =>{
        const result = await axios.get(`http://localhost:3001/today`);
        setMycartData(result.data);
        console.log(result.data);
    };

   

   

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
                       
                    </tr>)
                    })
                }
               
             </tbody>

            </table>
          
        </div>
      
    </div>
  )
}

export default Todaysorder;
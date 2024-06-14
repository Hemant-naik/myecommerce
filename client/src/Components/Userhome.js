import React, { useEffect, useState } from 'react'
import axios from 'axios'


import s1 from "../Assets/watch1.png"
import s2 from "../Assets/watch2.png"
import s3 from "../Assets/watch3.png"
import s4 from "../Assets/watch4.png"
// import s5 from "../Assets/titan1.webp"
// import s6 from "../Assets/titan2.webp"
// import s7 from "../Assets/titan3.webp"
// import s8 from "../Assets/titan4.png"



function Userhome() {
    const uid=localStorage.getItem('user')
 
    const [ProductList,setProductList]=useState([])
   useEffect(()=>{
        getProducts();
    },[]);
    const getProducts=async()=>{
        const result=await axios.get("http://localhost:3001/viewProduct");
        setProductList(result.data);
        console.log(result.data);
    }

    const AddCart=id=>{
        axios.post(`http://localhost:3001/addcart/${id}/${uid}`,{

        }).then((Response)=>{
            console.log(Response)
            alert("Add to cart succesfully")
            window.location="http://localhost:3000/userhome"
        }).catch(error =>{
            console.log(error)
        })
    }

    
    return (
        <div>
            <div id="slider" className="carousel slide mt-3" data-bs-ride="carousel"
                style={{ marginLeft: "10px", marginRight: "10px" }}>
                <div className="carousel-indicators"><button type="button" data-bs-target="#slider" data-bs-slide-to="0"
                    className="active"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className='col-lg-12'>
                            <img src={s1}  alt='login' 
                            style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>

                    <div className="carousel-item ">
                        <div className='col-lg-12'>
                            <img src={s2} width={600} height={400} alt='login'
                             style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>

                    <div className="carousel-item ">
                        <div className='col-lg-12'>
                            <img src={s3}  alt='login'
                             style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>



                    <div className="carousel-item ">
                        <div className='col-lg-12'>
                            <img src={s4}  alt='login' 
                            style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>
                </div>



                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
            <h2 className='text-center mt-3'>Our Products</h2>
            <hr></hr>
            <div class="container-fluid ">
                <div class="row">
                     {
                        ProductList.map((data,index)=>{
                            return (
                        // })
                    <div className="col-lg-3" key={data.id}>
                        <h5>{data.product_name}</h5>
                        <p><img src={`../Upload/${data.image}`} alt='not found' width={200} height={200}></img></p>
                        <p>₹ {data.price}/-</p>
                        <price><button className='btn btn-warning fw-bold text-dark' style={{width:"150px", fontSize:"18px"}}
                        onClick={()=> AddCart(data.id)}>AddCart</button></price>

                   <price className="ms-2"><button className='btn btn-warning fw-bold text-dark'  
                    style={{width:"150px", fontSize:"18px"}}><a href={`/qty/${data.id}`} style={{textDecoration:"none"}}>BuyNow</a></button></price>
                       
                    </div>)
                        }
                        )}

                   
                </div>
            </div>

        </div>
    )
}

export default Userhome;

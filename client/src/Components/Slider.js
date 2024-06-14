import React from 'react'
import s1 from "../Assets/f1.png"
import s2 from "../Assets/watch2.png"
import s3 from "../Assets/f3.png"
import s4 from "../Assets/f4.png"
import s5 from "../Assets/l1.jpg"
import s6 from "../Assets/l2.jpg"
import s7 from "../Assets/laptop2.jpeg"
import s8 from "../Assets/laptop3.jpg"






function Slider() {
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

                    <div class="col-lg-3">
                        <h2 style={{ marginLeft: '68px' }}>HP</h2>
                        <img src={s5} width={250} height={250} alt='not found'></img>
                        <p style={{marginTop:"15px" ,marginLeft:"60px", fontSize:"20px"}}><b>₹30000</b></p>
                        <p className="mt-3"><button style={{ width: '100px', height: "35px" }}
                            className="bg-warning border border-1 border-warning fw-bold btn btn-warning" >
                            <i className="fa-solid fa-cart-shopping"></i>CART</button>
                            <button style={{ width: '100px', height: "35px" }} className="bg-success ms-2 fw-bold text-white btn btn-success">
                                <i className="fa-solid fa-bag-shopping"></i> BUY</button></p>
                    </div>

                    <div class="col-lg-3">
                        <h2 style={{ marginLeft: '36px' }}>LENOVO</h2>
                        <img src={s6} width={250} height={250} alt='not found'></img>
                        <p style={{marginTop:"15px" ,marginLeft:"60px", fontSize:"20px"}}><b>₹70000</b></p>

                        <p className="mt-3"><button style={{ width: '100px', height: "35px" }}
                            className="bg-warning border border-1 border-warning fw-bold btn btn-warning" >
                            <i className="fa-solid fa-cart-shopping"></i>CART</button>
                            <button style={{ width: '100px', height: "35px" }} className="bg-success ms-2 fw-bold text-white btn btn-success">
                                <i className="fa-solid fa-bag-shopping"></i> BUY</button></p>

                    </div>

                    <div class="col-lg-3">
                        <h2 style={{ marginLeft: '50px' }}>ACER</h2>
                        <img src={s7} width={250} height={250} alt='not found'></img>
                        <p style={{marginTop:"15px" ,marginLeft:"60px", fontSize:"20px"}}><b>₹50000</b></p>

                        <p className="mt-3"><button style={{ width: '100px', height: "35px" }}
                            className="bg-warning border border-1 border-warning fw-bold btn btn-warning" >
                            <i className="fa-solid fa-cart-shopping"></i>CART</button>
                            <button style={{ width: '100px', height: "35px" }} className="bg-success ms-2 fw-bold text-white btn btn-success">
                                <i className="fa-solid fa-bag-shopping"></i> BUY</button></p>

                    </div>

                    <div class="col-lg-3">
                        <h2 style={{ marginLeft: '45px' }}> DELL</h2>
                        <img src={s8} width={250} height={250} alt='not found'></img>
                        <p style={{marginTop:"15px" ,marginLeft:"60px", fontSize:"20px"}}><b>₹40000</b></p>

                        <p className="mt-3"><button style={{ width: '100px', height: "35px" }}
                            className="bg-warning border border-1 border-warning fw-bold btn btn-warning" >
                            <i className="fa-solid fa-cart-shopping"></i>CART</button>
                            <button style={{ width: '100px', height: "35px" }} className="bg-success ms-2 fw-bold text-white btn btn-success">
                                <i className="fa-solid fa-bag-shopping"></i> BUY</button></p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider

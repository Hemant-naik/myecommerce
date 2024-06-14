import React from 'react'
import login from "../Assets/about1.jpeg"

function About() {
  return (
    <div>
      <div className="row">
			<div className="col-lg-5 mt-5 p-2 ms-5 ">
				<div style={{boxShadow:'1px 3px 4px 4px lightpink'}}>
				<h1 className="fw-bold ms-3">ABOUT</h1>
				<hr style={{width: '150px'}}/>
				<p style={{textalign:'justify', width: '500px'}} className="ms-4 p-2">Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller 
        over the Internet using a web  browser or a mobile app. Consumers fina product of interest by visiting the website of the retailer directly or by searching among alternative vendors 
        using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different 
        computers and devices, including desktop computers, laptops,
         tablet computers and smartphones. An online shop evokes the physical analogy of buying products or services at a regular "bricks-and-mortar" retailer
         or shopping center; the process is called business-to-consumer (B2C) online shopping. When an online store is set up to enable businesses to buy from another businesses, the process is called
          business-to-business (B2B) online shopping. A typical online store enables the customer to browse the firm's range of products and services, view photos or images of the products, along with 
          information about the product specifications, features and prices.</p>
			</div>
			</div>
			<div className="col-lg-5">
				<img src={login} Width= {'800px'} height={' 450px'} margintop={'100px'} alt='img' style={{boxShadow:'2px 3px 4px 3px lightblue'}} className='mt-5'></img>
			</div>
		</div>
    </div>
  )
}

export default About

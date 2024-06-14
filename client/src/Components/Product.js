import React,{useEffect, useState} from 'react'
import axios from 'axios'


function Product() {
  const initialvalues = { category: "", product_name: "", qty: "", uom: "",
   price: "",stock:"", description:""}
  const [formvalues, setformvalues] = useState(initialvalues)
  const [file,setfile]=useState('')
  

  const [CatList,setCatList]=useState([])
useEffect(()=>{
getCategory();

},[]);

const getCategory=async ()=>{
const result=await axios.get("http://localhost:3001/categoryview");
setCatList(result.data)
console.log(result.data)

};


  const setImgFile=(e)=>{
    setfile(e.target.files[0])
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues.category)
  }

  const FormFeedback = (e) => {
    e.preventDefault();
    var formData=new FormData();
    formData.append("file",file)
    formData.append("category",formvalues.category)
    formData.append("product_name",formvalues.product_name)
    formData.append("uom",formvalues.uom)
    formData.append("qty",formvalues.qty)
    formData.append("price",formvalues.price)
    formData.append("description",formvalues.description)
    formData.append("stock",formvalues.stock)
    console.log(...formData)
    const config={
      Headers:
      {
        "Content-Type":"multipart/form-data"
      }
    }
    axios.post("http://localhost:3001/Product", 
      formData, config
    ).then((Response) => {
      console.log(Response)
      alert("Added Successfully");
    })
      .catch(error => {
        console.log(error)
      })
  }

  return (

    <div>
      <section className="vh-100">
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>PRODUCT</b></h2>
              <hr></hr>

                    <form onSubmit={FormFeedback}>
{/* 
                <div className="form-outline mb-4">
                  <label className="form-label"><b>Category</b></label>
                  <input type="text"  value={formvalues.category} name='category'
                  className="form-control form-control-lg" onChange={handleChange} />
                </div> */}
                     <div  className='mb-3'>
                      <select name='category' className='form-control' defaultValue={formvalues.category}
                      onChange={handleChange}>
                        <option>select category</option>
                        {
                          CatList.map((Cat,index)=>{
                            return(
                              <option key={Cat.id} value={Cat.category_name}>{Cat.category_name}</option>
                            )
                          })
                        }
                      </select>
                     </div>
                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Product_name</b></label>
                  <input type="text" value={formvalues.product_name} name='product_name'
                  className="form-control form-control-lg" onChange={handleChange} />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Quantity</b></label>
                  <input type="text" value={formvalues.qty} name='qty'
                  onChange={handleChange} className="form-control form-control-lg" />
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Uom</b></label>
                  <input type="text" value={formvalues.uom} name='uom'
                   className="form-control form-control-lg" onChange={handleChange} />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Price</b></label>
                  <input type="text" value={formvalues.price} name='price'
                  onChange={handleChange} className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Stock</b></label>
                  <input type="text" value={formvalues.stock} name='stock'
                  onChange={handleChange}
                   className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Image</b></label>
                  <input type="file"  name='file' required
                   onChange={setImgFile} className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Description</b></label>
                  <input type="text" value={formvalues.description}  name='description'
                  onChange={handleChange} className="form-control form-control-lg" />
                </div>

            

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className=" text-body" style={{width:"170px", height:"40px",
                    border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Submit</button>
                </div>

                

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    
  )
}

export default Product
